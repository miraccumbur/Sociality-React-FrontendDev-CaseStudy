import React from "react";

function Card({ props }) {
  const statusColors = ["#ACACAC", "#3AC183", "#F7BF38", "#FB6450", "#67B1F2"];
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

  const getDate = (dateAndTime) => {
    const dateAndTimeSplit = dateAndTime.split(" ");
    const dateSplit = dateAndTimeSplit[0].split("-");
    const timeSplit = dateAndTimeSplit[1].split(":");
    return (
      dateSplit[2] +
      " " +
      months[parseInt(dateSplit[1])] +
      " " +
      dateSplit[0] +
      " - " +
      timeSplit[0] +
      ":" +
      timeSplit[1]
    );
  };

  const getTopIcon = (status) => {
    if (status === 0) {
      return (
        <div className="cardContentTopButton">
          <img src="/icons/delete.png" alt="delete"></img>
          <img src="/icons/options.png" alt="options"></img>
        </div>
      );
    } else if (status === 1) {
      return (
        <div className="cardContentTopButton">
          <img src="/icons/cancel.png" alt="cancel"></img>
          <img src="/icons/delete.png" alt="delete"></img>
          <img src="/icons/options.png" alt="options"></img>
        </div>
      );
    } else {
      return (
        <div className="cardContentTopButton">
          <img src="/icons/approve.png" alt="approve"></img>
          <img src="/icons/delete.png" alt="delete"></img>
          <img src="/icons/options.png" alt="options"></img>
        </div>
      );
    }
  };

  const getBottomIcon = (type) => {
    if (type === "twitter") {
      return (
        <div className="cardContentBottom">
          <div>
            {" "}
            <img src="/icons/heart.png" alt="heart"></img>
            <p>0</p>
          </div>

          <div>
            {" "}
            <img src="/icons/retweet.png" alt="heart"></img>
            <p>0</p>
          </div>

          <div>
            {" "}
            <img src="/icons/comments.png" alt="heart"></img>
            <p>0</p>
          </div>

          <div>
            {" "}
            <img src="/icons/views.png" alt="heart"></img>
            <p>0</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cardContentBottom">
          <div>
            {" "}
            <img src="/icons/likes.png" alt="heart"></img>
            <p>0</p>
          </div>

          <div>
            {" "}
            <img src="/icons/comments.png" alt="heart"></img>
            <p>0</p>
          </div>

          <div>
            {" "}
            <img src="/icons/shares.png" alt="heart"></img>
            <p>0</p>
          </div>

          <div>
            {" "}
            <img src="/icons/views.png" alt="heart"></img>
            <p>0</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="cardContainer">
      <a
        style={{ backgroundColor: statusColors[props.data.status] }}
        className="cardLink"
        href={props.data.link}
      >
        <img
          className="cardLinkImage"
          src={"/icons/" + props.data.account.channel + ".png"}
          alt={props.data.account.channel}
        ></img>
      </a>
      <div className="cardContent">
        <div className="cardContentTop">
          <p>{getDate(props.data.published_at)}</p>
          {getTopIcon(props.data.status)}
        </div>
        <p className="entryMessageP">{props.data.entry.message}</p>
        <div
          className="contentImageDiv"
          style={{ backgroundImage: `url("/pictures/no-post-image.png")` }}
        >
          <img
            className="contentImage"
            src={props.data.entry.image}
            alt=""
          ></img>
        </div>
        {getBottomIcon()}
      </div>
    </div>
  );
}

export default Card;
