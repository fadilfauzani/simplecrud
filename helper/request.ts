import * as url from 'url';
import * as http from 'http'
export const getQuery = (req : http.IncomingMessage) =>{
    const parsedUrl = url.parse(req.url ?? '', true);
    
    return parsedUrl.query;

}
export const getBody = async (req : http.IncomingMessage) => {
    var body  : any;
    req.on('data', function(chunk) {
        body = JSON.parse(chunk.toString())
    });

    return body
}