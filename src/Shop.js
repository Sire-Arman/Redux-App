import React from 'react'

const Shop = () => {
    const handleAdd=()=>{
        let val = document.getElementById("val").value;
    }
    const handleRemove=()=>{
        
    }
  return (
    <div>
        <button onClick={handleRemove} className='btn btn-primary m-4'>-</button>
        Add this Item to Cart
        <button onClick={handleAdd} className='btn btn-primary m-4'>+</button>
    </div>
  )
}

export default Shop