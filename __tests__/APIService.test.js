import ViewOrderService from '../src/viewOrderHistory/ViewOrderService';
//import AddOrder from '../src/addOrder/AddOrder';


var route='http://localhost:8080/user/atu_1/order'

describe('APIService test', () => {
  let apiService;

  // it('should throw error when fetch throws error', () => {
  //   apiService = new APIService(new FailureStub());
  //   apiService.makeGetRequest('someRoute').catch((err) => {
  //       expect(err).toBeTruthy();
  //   });
  // });

  // it('should work when axios works', () => {});

  it('should throw error when fetch throws error', () => {
    
   let viewOrderServiceStub = new ViewOrderService()

    let content = {
      error: ["error got"]
    }

    let error=viewOrderServiceStub.viewOrderServiceFetch().catch((err) => {
      expect(JSON.stringify(content)).toEqual(err);

    })

  });

  it('should send true', function(){
    expect(true).toBe(true)
  })





});


