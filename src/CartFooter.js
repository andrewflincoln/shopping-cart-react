import React from 'react'



function CartFooter (props) {
    return (
        <div className="footer page-footer">    
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">&copy; { props.year }</a>
            </nav>
        </div>      
    );
}

export default CartFooter