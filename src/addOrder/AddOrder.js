const form = document.getElementById("form1");
const qty = document.getElementById("quantity");
var type = "BUY"
const price = document.getElementById("price");
var esopType = document.getElementById("esopType")

window.buySellCheck = function buySellCheck() {
    if (document.getElementById('buy').checked) {
        type = "BUY"
        document.getElementById("esopType").disabled = true

    }
    else {
        type = "SELL"
        document.getElementById("esopType").disabled = false
        document.getElementById("esopType").checked = "NORMAL"
    }
}

export default class PlaceOrder {


    async callFetchRequest(userName, content) {

        return fetch(`http://localhost:8080/user/${userName}/order`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:
                content

        })
            .then((response) => response.json())
            .then((data) => { return data })
            .catch((error) => { return error })
    }



    async createOrder() {

        var content = this.getJson()


        var userName = window.localStorage.getItem("userId")

        const responseData = await this.callFetchRequest(userName, content)

        this.getOutputOfRequest(responseData)
            .then((data) => {
                document.getElementById("message").style.color = "green";
                document.getElementById("message").innerHTML = "Order Placed";
                document.getElementById("esopType").disabled = false
            })
            .catch((error) => {
                document.getElementById("message").innerHTML = error
                document.getElementById("message").style.color = "red";
            })
    }

    getOutputOfRequest(json) {
        if (json.error)
            return Promise.reject(json.error)
        else
            return Promise.resolve(json)
    }


    getJson() {

        var content
        if (type == "SELL") {
            console.log("IN sell")
            content = JSON.stringify({
                quantity: parseInt(qty.value),
                type: type,
                price: parseInt(price.value),
                esopType: esopType.value
            })
        }
        else {
            content = JSON.stringify({
                quantity: parseInt(qty.value),
                type: type,
                price: parseInt(price.value)
            })
        }
        return content
    }



}


window.onload = function () {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let order = new PlaceOrder()
        order.createOrder()
    });
}




