import React, { useState, useEffect } from "react";

const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart();
    }, []);

    const getCart= async () => {
        const user = localStorage.getItem("User");
        if(user) {
            console.log(user);
        }
        else {
            alert("Please, Login.")
        }
        let result = await fetch('http://localhost:5000/getCart');
        result = await result.json();
        setCart(result);
        console.log(result);
    }


    const removeFromCart = async (id) => {
        let result = await fetch(`http://localhost:5000/removeCart/${id}`, {
            method: "Delete"

        });
        result = await result.json();
        console.log(result);
        if(result) {
            // getCart();
            setCart((prevCart) => prevCart.filter(item => item._id !== id));
        }
    }


    return(
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                <li>S. No.</li>
                <li>Product Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
            
            </ul>
            {
                
                cart.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.Name}</li>
                        <li>{item.Price}</li>
                        <li>{item.Category}</li>
                        <li>{item.Company}</li>
                        <li>
                            <button onClick={() => removeFromCart(item._id)}>Remove From Cart</button>
                        </li>
                    </ul>
                )
            }

            
        </div>
    )
}
export default Cart;