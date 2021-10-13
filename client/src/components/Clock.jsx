import  React, {useEffect,useState,Fragment } from 'react'

function Clock(){
    const [clockStateDate,setClockStateDate] = useState(0);
    const [clockStateTime,setClockStateTime] = useState(0);

    useEffect(()=>{
      setInterval(()=>{
      const date0  = new Date();
      const date1  = new Date();
      setClockStateDate(date0.toLocaleDateString());
      setClockStateTime(date1.toLocaleTimeString());

      },1000)
    },[]);

    return(

      <Fragment>
        <div style={{fontSize:"20px"}}>{clockStateDate}</div>
             
             
        

        <div style={{fontSize:"20px"}}>    {clockStateTime}  </div>
     
        </Fragment>
        
        )
}

export default Clock