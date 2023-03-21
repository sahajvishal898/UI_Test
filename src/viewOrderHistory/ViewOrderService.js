
export default class ViewOrderService{
    
    async viewOrderServiceFetch() {


        var userName = window.localStorage.getItem("userId")
        const response = await fetch(`http://localhost:8080/user/${userName}/order`);
        return await response.json();
    }
    
 


}