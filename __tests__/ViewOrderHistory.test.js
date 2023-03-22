import ViewOrderHistory from '../src/viewOrderHistory/ViewOrderHistory'

describe('ViewOrderHistory', () => {

    it('fetches the user order data from the API', async () => {
        const mockResponse = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
        const mockJsonPromise = Promise.resolve(mockResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
        fetch = mockFetch;

        const viewOrderHistory = new ViewOrderHistory();

        let response = await viewOrderHistory.getTableData("satyam");

        expect(response).toBe(mockResponse)
        expect(mockFetch).toHaveBeenCalledWith('http://localhost:8080/user/satyam/order');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });


    it('fetches the user order data from the API', async () => {
        const mockResponse = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
        const mockJsonPromise = Promise.resolve(mockResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
        fetch = mockFetch;

        const viewOrderHistory = new ViewOrderHistory();

        let response = await viewOrderHistory.getTableData("sayam");

        expect(response).toBe(mockResponse)
        expect(mockFetch).not.toHaveBeenCalledWith('http://localhost:8080/user/satyam/order');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});