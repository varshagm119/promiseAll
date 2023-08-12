

const cart = ["shoes","pants"];

const promise = createOrder(cart);

promise.then(function(orderId) {
    console.log(orderId);
    //proceedToPayment(orderId);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message)
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "123";
        if(orderId){
            resolve(orderId);
        }
        
    })
    return pr;
}
function validateCart(cart){
    return true;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful")
    })
}