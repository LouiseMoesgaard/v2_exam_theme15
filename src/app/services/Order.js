const Order = {
    sendOrder: (order)=> {
        return fetch("https://examspacebar.herokuapp.com/order", {
            method: "post",
            body: JSON.stringify(order),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }            
        }).then(r=>r.json())
        .then(data=>console.log(data))
    }
}

export default Order;
