import * as http from 'http';
export const response = ( res : http.ServerResponse<http.IncomingMessage>, { data = {}, status = 200, contentType = "application/json" }) => {
    res.writeHead(status, { "Content-Type": contentType });
    res.write(JSON.stringify(data));
    res.end();
};

