
import APIService from "../src/APIService";

class fetchRejectStub {
  get(path) {
    return Promise.reject("Error");
  }
}

class fetchResolveStub {
  get(path) {
    return Promise.resolve("Something happened");
  }
}


it("makeGetRequest should return a rejected promise", () => {
  const apiService = new APIService(new fetchRejectStub);

  expect(apiService.makeGetRequest(" ")).rejects.toEqual("Error");
});

it("makeGetRequest should return a resolved promise ", () => {
  const apiService = new APIService(new fetchResolveStub);

  expect(apiService.makeGetRequest(" ")).resolves.toEqual("Something happened");
});


