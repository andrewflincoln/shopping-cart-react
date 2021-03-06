import React from 'react'
import CartItem from './CartItem';


function CartItems (props) {
    return (
        <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
            <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
            </div>
            </div>
            {
                props.items.map(item => {
                    return(
                    <CartItem
                        name={item.product.name}
                        priceInCents={'$' + (item.product.priceInCents / 100).toFixed(2)}
                        quantity={item.quantity}
                    />     
                    )
                })
                
            }

        </div>
        <br></br>
        </div>
        
    );
}


export default CartItems