import ViewOrderService from '../src/viewOrderHistory/ViewOrderService'

describe('ViewOrderService', () => {
  beforeEach(() => {
    window.localStorage.setItem('userId', 'satyam');
  });

  afterEach(() => {
    window.localStorage.clear();``
  });

  it('fetches the user order data from the API', async () => {
    const mockResponse = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
    fetch = mockFetch;

    const viewOrderService = new ViewOrderService();
    let response=await viewOrderService.viewOrderServiceFetch();

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8080/user/satyam/order');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});