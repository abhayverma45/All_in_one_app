import React,{ useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Abhay=()=>{
    const[jokes,setjokes]=useState([]);

    const getjokes=async()=>{
        const response=await axios.get("/api/jokes")
        if(response.data.success===true){
            setjokes(response.data.data)
        }
    };
    
    useEffect(()=>{
        getjokes();
    },[]);
   return(
        <>
        {
            jokes.map((e,i)=>{
                return(
                    <>
                    <Card
                         current={i}
                category={e.category}
                headline={e.headline}
                description={e.description}
                    />
                    </>
                )

            })
        }
        </>
    )
}
export default Abhay;