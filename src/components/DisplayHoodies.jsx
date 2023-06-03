import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

export default function DisplayHoodies() {

    const [hoodies, setHoodies] = useState();

    useEffect(() => {
        const getHoodies = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            setHoodies(data)
        }   
        getHoodies()
    }, [])

    return (
        <div>
            {hoodies?.map(hoodie => <Card key={hoodie.id} name={hoodie?.title} image={hoodie?.image} price={hoodie?.price} />)}
        
        </div>
    )




}