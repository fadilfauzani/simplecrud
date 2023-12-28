import * as http from 'http';
import * as url from 'url';
import { createUser, deleteUser, getUsers, updateUser } from '../controller/UserController';
import { internalServerErrorResponse, notFoundResponse, response } from '../helper/response';
type controllerType = (req : http.IncomingMessage, res : http.ServerResponse<http.IncomingMessage>) => void
type Routes = {
    [path: string] :  {[method : string] : controllerType}
}
var handlers : Routes = {};

const registerRoute = (path : string, method : string, callback : controllerType) =>{
    handlers[path] = handlers[path] || {};
    handlers[path][method] = callback;
}
export const serveServer =  async() => {
    registerRoute('user', 'GET', getUsers);
    registerRoute('user', 'PUT', updateUser);

    registerRoute('user', 'DELETE', deleteUser);
    registerRoute('user', 'POST', createUser);

    const server = http.createServer(async (req, res) => {
        const parsedUrl = url.parse(req.url ?? '', true);
        const path = parsedUrl.pathname?.replace('/','');
        const method = req.method?.toUpperCase();
        try {
            const handler = handlers[path??''][method??'']
            handler(req, res);
        } catch (e) {
            if (e instanceof TypeError) {
                notFoundResponse(res)
            }
            else {
                internalServerErrorResponse(res)
            }
        }
    })
    server.listen(6000, () => console.log('Server listened at 6000'))
}

