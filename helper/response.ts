import * as http from 'http';
export const response = ( res : http.ServerResponse<http.IncomingMessage>, { data = {}, status = 200, contentType = "application/json" }) => {
    res.writeHead(status, { "Content-Type": contentType });
    res.write(JSON.stringify(data));
    res.end();
};


export const notFoundResponse = (res : http.ServerResponse<http.IncomingMessage>) => {
    return response(res, {
        status: 404,
        data: { message: "requested resource not found!" },
      }) 
}
export const internalServerErrorResponse = (res : http.ServerResponse<http.IncomingMessage>) => {
    return response(res, {
        status: 500,
        data: { message: "error occured!" },
      }) 
}

export const badRequestResponse = (res : http.ServerResponse<http.IncomingMessage>) => {
    return response(res, {
        status: 400,
        data: { message: "Bad Request!" }
    })
}