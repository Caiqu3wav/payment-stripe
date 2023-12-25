import React from "react";
import { Stripe } from "@stripe/stripe-js";




const Product: React.FC = () => {
    return(
        <h1>Product</h1>
    )
} 

const getStaticPaths: GetStaticPaths = async () => {
    const stripe = new Stripe()
    
    return {
        paths: [],
        fallback: false,
    }
}

export default Product;

