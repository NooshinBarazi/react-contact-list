import http from "./HttpService";

function getOneContact(id) {
    return  http.get(`/contacts/${id}`) ;
}

export default getOneContact;