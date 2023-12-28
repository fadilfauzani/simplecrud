import * as http from 'http'
import { badRequestResponse, response } from '../helper/response'
import { getBody, getQuery } from '../helper/request';
import { notFoundResponse } from '../helper/response';
import { User } from '../entity/User';
import { AppDataSource } from '../data/connection';
export const createUser = async (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const body = await getBody(req);
    console.log(body)
    const userRepository = AppDataSource.getRepository(User);
    var user = new User();

    user.name = body.name
    user.dob = body.dob
    user.email = body.email
    try {
        user = await userRepository.save(user);
    } catch {
        badRequestResponse(res)
        return
    }
    response(res, { data: {user} })
}
export const getUsers = async (req : http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {

    const query = getQuery(req)
    const userRepository = AppDataSource.getRepository(User);
    if (query.id == null) {
        const users = await userRepository.find()
        response(res, {data: {users}})
    } else {
        const id = Number(query.id)
        try {

            const user = await userRepository.findOne({where :  {id : id}})
            if (user == null) {
                notFoundResponse(res)
                return
            }
            response(res, {data: {user}})
        }
        catch {
            badRequestResponse(res)
            return
        }

    }

}

export const updateUser = async (req : http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const query = getQuery(req)
    const body = await getBody(req)
    if (query.id == null) {
        notFoundResponse(res)
        return
    }
    const userRepository = AppDataSource.getRepository(User);
    const id = Number(query.id)
    var user = await userRepository.findOne({where :  {id : id}})
    if (user == null) {
        notFoundResponse(res)
        return
    }
    user.name = body.name
    user.dob = body.dob
    user.email = body.email
    try {
        user = await userRepository.save(user);
    } catch {
        badRequestResponse(res)
        return
    }
    response(res, { data: {user} })

}

export const deleteUser = async (req : http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const query = getQuery(req)
    if (query.id == null) {
        notFoundResponse(res)
        return
    }
    const userRepository = AppDataSource.getRepository(User);
    const id = Number(query.id)
    try {
        await userRepository.softDelete(id);
        response(res, { })
    } catch {
        badRequestResponse(res)
        return
    }
    
}