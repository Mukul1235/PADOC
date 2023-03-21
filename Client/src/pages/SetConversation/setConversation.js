import axios from 'axios';
import React, { useEffect, useState } from 'react'

const setConversation = () => {
    const [conversation,setConversation]=useState(null);

    useEffect(()=>{
        const getUser=async()=>{
            try{
                const res=await axios.get("/BasedDoctor/HeartSurgeon");
                setConversation(res.data);
            }
            catch(err){
                console.log(err)
            }
        }
        getUser();
    });

  return (
      <div>
          sdv
          {conversation?.name}
     <span> {conversation?.name} </span>
    </div>
  )
}

export default setConversation
