import http from "./HttpService";

function getContacts() {
    return  http.get('/contacts') ;
}

export default getContacts;