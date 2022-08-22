import http from "./base-service";

class PostCodeService {
    GetAutoCompletePostCodes(postCode: string) {
        return http.get(`/GetAutoCompletePostCodes?postCode=${postCode}`);
    }
    GetPostCodeDetails(postCode: string) {
        return http.get(`/GetPostCodeDetails?postCode=${postCode}`);
    }


}

export default new PostCodeService();