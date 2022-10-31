import http from "./HttpService";

function PostContact(contact) {
    return http.post('/contacts', contact);
}

export default PostContact;