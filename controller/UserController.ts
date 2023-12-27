import * as http from 'http'
import { response } from '../helper/response'
import { getQuery } from '../helper/request';
export const createUser = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {

}
export const getUsers = (req : http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {

    const query = getQuery(req)
    response(res, {
        data: {
            message : "Berhasil"
        }
    })
}

export const updateUser = (req : http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const query = getQuery(req)

}

export const deleteUser = (req : http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const query = getQuery(req)

}