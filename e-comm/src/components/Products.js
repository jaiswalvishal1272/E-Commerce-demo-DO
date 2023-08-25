import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
        console.log(result);
    }

    

    const addToCart = async (index) => {
        const user = localStorage.getItem("User");
        if(user) {
            try {
                const productToAdd = products[index];
                const response = await fetch('http://localhost:5000/addCart', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productToAdd),
                });
                const data = await response.json();
                console.log("Added to cart:", data);

            
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
        e
    
    }

    return (
        <div className="product-list">
            <h2>Products</h2>
            <ul>
                <li>S. No.</li>
                <li>Product Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
            </ul>
            {
                products && products.length > 0 &&
                products.map((item, index) =>
                    <ul key={index}>
                        <li>{index + 1}</li>
                        <li>{item.Name}</li>
                        <li>{item.Price}</li>
                        <li>{item.Category}</li>
                        <li>{item.Company}</li>
                        <li>
                            <button onClick={() => addToCart(index)}>Add to Cart</button>
                        </li>
                    </ul>
                )
            }
        </div>
    );
}

export default Products;



