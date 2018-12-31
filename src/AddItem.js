import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curId: 5,
            name: 'Mediocre Iron Watch',
            quantity: 0
        }    
    }

    handleChange = (event) => {
        this.setState({
          [ event.target.name ]: event.target.value
        }) 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({curId: this.state.curId + 1})
        let itemInArray = this.props.saleItems.find(item => item.name === this.state.name)
        const item = {
            product: {
                id: this.state.curId,
                name: this.state.name,
                priceInCents: itemInArray.priceInCents
            },
            quantity: Number(this.state.quantity) 
            
        }
 
        this.props.addItem(item)
    }

    render() {
        return (  
        <div id='input-form-div' className='col-md-8 offset-md-2'>
            <br></br>
            <form onSubmit={this.handleSubmit}>
                <label for="quantity">Quantity:</label>
                <input type="text"  onChange={this.handleChange} id="quantity" name="quantity" className="form-control" placeholder="Enter quantity" required/>
            
                <br></br><br></br>
                <label for="item-select">Select your item:</label>
                <select id="item-select" onChange={this.handleChange} name="name" className="form-control" required>
                
                    {
                        this.props.saleItems.map(item => {
                            return(
                                <option value={item.name}> {`${item.name}    $${(item.priceInCents / 100).toFixed(2)}`} </option>                
                            )
                        })
                    }
          
                </select>
            
                <input type="submit" class="btn btn-primary" id='sub-quantity' value="Add item"/>
        
            </form>
    
        </div>
    
        );
  }
}

export default AddItem