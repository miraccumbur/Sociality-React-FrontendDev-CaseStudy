import React from "react";
import Card from "./Card"
 
function CardLine({ props }) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="cardLineContainer">
      <h1 className="cardLineDateH1">
        {props.date.split("-")[2]} {months[parseInt(props.date.split("-")[1])]}{" "}
        {props.date.split("-")[0]}
      </h1>
      <div className="line">
        {
            props.data.posts_by_date[props.date].map((data,key)=>{
                return <Card key={key} props={{data:data}}></Card>
            })
        }
      </div>
    </div>
  );
}

export default CardLine;
