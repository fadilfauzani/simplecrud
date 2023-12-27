import * as http from 'http';
import * as url from 'url';
import { createUser, deleteUser, getUsers, updateUser } from '../controller/UserController';
import { response } from '../helper/response';
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

    console.log(handlers)
    const server = http.createServer(async (req, res) => {
        const parsedUrl = url.parse(req.url ?? '', true);
        const path = parsedUrl.pathname?.replace('/','');
        const method = req.method?.toUpperCase();
        console.log(parsedUrl, path, method);
        try {
            const handler = handlers[path??''][method??'']
            handler(req, res);
        } catch (e) {
            if (e instanceof TypeError) {
                response(res, {
                    status: 404,
                    data: { message: "requested resource not found!" },
                  }) 
            }

        }
    })
    server.listen(6000, () => console.log('Server listened at 6000'))
}

