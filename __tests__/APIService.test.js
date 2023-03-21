import APIService from "../src/APIService";

describe("APIService Test", function(){
  // class fetchRejectStub {
  // get(path) {
  //   return Promise.reject("Error");
  // }};

  // class fetchResolveStub {
  // get(path) {
  //   return Promise.resolve("Something happened");
  // }};


  // it("makeGetRequest should return a rejected promise", () => {
  // const apiService = new APIService(new fetchRejectStub);

  // expect(apiService.makeGetRequest(" ")).rejects.toEqual("Error");});

  // it("makeGetRequest should return a resolved promise ", () => {
  // const apiService = new APIService(new fetchResolveStub);

  // expect(apiService.makeGetRequest(" ")).resolves.toEqual("Something happened");});

  let apiService;

  beforeEach(() => {
    const mockFetch = jest.fn();
    apiService = new APIService({ get: mockFetch });
  });

  it('makes a GET request using the httpLibrary', () => {
    const route = '/some/route';
    apiService.makeGetRequest(route);
    expect(apiService.httpLibrary.get).toHaveBeenCalledWith(route);
  });

});



