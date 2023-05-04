import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import './index.css'
import Sdata from "./Sdata.jsx";


// function ncard(val){
//   // console.log(val)
//   return(
//     <Card
//       sname={val.sname}
//       imgsrc={val.imgsrc}
//       title={val.title}
//       link={val.link}
//     /> 
//   );
// }


ReactDOM.render(
  <>
   <h1 className="heading__style"> List of top 5 Netflix Series in 2023</h1>
   {/* {
    Sdata.map((s)=>{
      return     <Card
      sname={s.sname}
      imgsrc={s.imgsrc}
      title={s.title}
      link={s.link}
    />
    })
   } */}
  
  
     {Sdata.map ((val,index) =>{
      console.log(index)
      return (
        <Card
        key={val.id}
      sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
    /> 
      );
    })}

  </>,
  document.getElementById("root")
);
