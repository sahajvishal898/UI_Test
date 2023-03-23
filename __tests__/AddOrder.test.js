import PlaceOrder from '../src/addOrder/AddOrder'

describe('AddOrder', () => {

    it('check fetch call of PlaceOrder', async () => {
        const requestContest="request"
        const mockResponse = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
        const mockJsonPromise = Promise.resolve(mockResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
        global.fetch = mockFetch;
        
        const placeOrder = new PlaceOrder();

        let response = await placeOrder.callFetchRequest("satyam",requestContest);

        expect(response).toBe(mockResponse)
        expect(mockFetch).toHaveBeenCalledWith('http://localhost:8080/user/satyam/order', {"body": "request", "headers": {"Content-type": "application/json; charset=UTF-8"}, "method": "POST"});
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return reject when error json is send', () => {
        const errorMessage = "not registered"
        const placeOrder = new PlaceOrder();

        var data = '{'
            + '"error" : "not registered"'
            + '}';

        return expect(placeOrder.getOutputOfRequest(JSON.parse(data))).rejects.toEqual(errorMessage);
    });


    it('should return resolve when correct json is send', () => {
        const response = "5"
        const placeOrder = new PlaceOrder();

        var data = '{'
            + '"price" : "5"'
            + '}';

        return expect(placeOrder.getOutputOfRequest(JSON.parse(data))).resolves.toEqual(JSON.parse(data));
    }); 
});