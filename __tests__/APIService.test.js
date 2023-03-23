/**
 * @jest-environment jsdom
 */

import APIService from "../src/APIService";

describe("APIService Test", function(){
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



