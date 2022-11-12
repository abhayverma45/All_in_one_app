
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const Abhay=()=>{


    const[news,setnews]=useState([]);

    const getnews=async()=>{
        const response=await axios.get("/api/news")
        if(response.data.success===true){
            setnews(response.data.data)
        }
    };


    useEffect(()=>{
        getnews();
    },[]);
    
    return(
        <>
        {
        news.map((e,i)=>{
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