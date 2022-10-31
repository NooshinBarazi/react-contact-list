import http from "./HttpService";

function deleteContact(id) {
    return http.delete(`/contacts/${id}`);
}

export default deleteContact;