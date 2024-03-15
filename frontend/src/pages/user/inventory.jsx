import React from 'react';

function Inventory(){
    return(
        <div className='inventory'>
            <h1>Inventory</h1>
            <div className='inventory-container'>
                <div className='inventory-item'>
                    <h2>Item 1</h2>
                    <p>Item Description</p>
                    <p>Price: $0.00</p>
                    <p>Quantity: 0</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <div className='inventory-item'>
                    <h2>Item 2</h2>
                    <p>Item Description</p>
                    <p>Price: $0.00</p>
                    <p>Quantity: 0</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Inventory;