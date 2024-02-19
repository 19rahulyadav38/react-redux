import http from "../http-common";

const  _getAllCharecters = () => {
    return http.get('/character')
}

export {
    _getAllCharecters
}