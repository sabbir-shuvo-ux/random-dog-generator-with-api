import React, { useEffect, useRef, useState } from "react";

const ApiWork = () =>{
      const [allData, setAllData] = useState("");
      const [waitText, setWaitText] = useState("☑️ here it is");
      const [bgColor, setBgColor] = useState("green");
      const img = useRef();

      const getApi = async (url) => {
            const response = await fetch(url);
            const data = await response.json();

            return data;
      }

      useEffect(()=> {
            
            try{
                  const apiFun = async () => {
                        const mainData = await getApi("https://dog.ceo/api/breeds/image/random");
                        setAllData(mainData)
                  }
                  apiFun();
            }catch(error){
                  console.log(error)
            }
            
      }, [])

      const handleClick = () => {
            setWaitText("Please Wait... ⏳")
            setBgColor("red")
            const clickApi = async () => {
                  const clickData = await getApi("https://dog.ceo/api/breeds/image/random");
                  setAllData(clickData);
                  setWaitText("☑️ here it is")
                  setBgColor("green")
            }
            clickApi();
      }

     

      const imgSelect = allData.message;
      return(
            <>
            <div className="container">
                  <p className="alert" style={{ background: `${bgColor}` }}> {waitText} </p>
                  <div className="img_box">
                        <img src={imgSelect} alt="dog img" ref={img} />
                  </div>
                  <button className="btn" onClick={handleClick}>Change Dog</button>
            </div>
            </>
      )
}

export default ApiWork;