import {ViewOrderHistory,HistoryTable} from '../src/viewOrderHistory/ViewOrderHistory'

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


    it('should fetch the user order data from the API where username is vishal', async () => {
        const mockResponse = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
        const mockJsonPromise = Promise.resolve(mockResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
        fetch = mockFetch;

        const viewOrderHistory = new ViewOrderHistory();

        let response = await viewOrderHistory.getTableData("vishal");

        expect(response).toBe(mockResponse)
        expect(mockFetch).not.toHaveBeenCalledWith('http://localhost:8080/user/satyam/order');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });


    it('should return reject when error json is send', () => {
        const errorMessage = "not registered"
        const viewOrderHistory = new ViewOrderHistory();

        var data = '{'
            + '"error" : "not registered"'
            + '}';

        return expect(viewOrderHistory.checkError(JSON.parse(data))).rejects.toEqual(errorMessage);
    });



    it('should return resolve when correct json is send', () => {
        const response = "5"
        const viewOrderHistory = new ViewOrderHistory();

        var data = '{'
            + '"price" : "5"'
            + '}';

        return expect(viewOrderHistory.checkError(JSON.parse(data))).resolves.toEqual(JSON.parse(data));
    });

    it('should return the correct table head', ()=>{
      const headerList = []
      const expectedList = ['OrderId', 'Type', 'EsopType', 'Quantity', 'Price', 'Status', 'FilledQty', 'Filled']
      
      const historyTable = new HistoryTable();
      const headerRow = historyTable.createTableHeading()
      for (const header of headerRow.cells )
      {
        headerList.push(header.innerText);
      }

      expect(headerList).toEqual(expectedList);
    });
});