
export default class ViewOrderService{
    viewOrderServiceFetch() {
        var userName = window.localStorage.getItem("userId")
        fetch(`http://localhost:8080/user/${userName}/order`)
             .then(function (response) {
                 return response.json();
             })
    }
}