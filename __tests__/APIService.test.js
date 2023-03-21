
import APIService from "../src/APIService";

class fetchStub {
  get(path) {
    return Promise.reject("Something happened");
  }
}

it("thrpow error", () => {
  const apiService = new APIService(new fetchStub);

  expect(apiService.makeGetRequest(" ")).rejects.toEqual("Something happened");
});


