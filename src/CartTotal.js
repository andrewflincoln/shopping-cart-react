import React from 'react'

function CartTotal (props) {
    
    let sumTotal = 0
    for (let item of props.items) {
        sumTotal += item.product.priceInCents * item.quantity
    }

    return (
        <div class = 'col-md-4 offset-md-2'>Cart Total:{
    
            `$${(sumTotal/100).toFixed(2)}`
        } 
        </div>
    );
}

export default CartTotal