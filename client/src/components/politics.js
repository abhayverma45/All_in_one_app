import React,{ useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Abhay=()=>{

    const[quotes,setquotes]=useState([]);

    const getquotes=async()=>{
        const response=await axios.get("/api/quotes")
        if(response.data.success===true){
            setquotes(response.data.data)
        }
    };


    useEffect(()=>{
        getquotes();
    },[]);
    return(
        <>
        {
         quotes.map((e,i)=>{
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