import http from "./HttpService";

function PutContact(id,contact) {
    return http.put(`/contacts/${id}`, contact);
}

export default PutContact;