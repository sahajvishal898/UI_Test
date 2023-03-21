export default class APIService {

    httpLibrary;

    constructor(fetch) {
        this.httpLibrary = fetch;
    }

    makeGetRequest = (route) => {
        return this.httpLibrary.get(route);
    }
}