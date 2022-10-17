import React, { useState } from "react";
import ColorMean from "./ColorMean";
import { connect } from "react-redux";
import CardLine from "./CardLine";

function PublishFeed({ dataReducer }) {
  const [dataReducerPropertyNames, setDataReducerPropertyNames] =
    useState(null);
  useState(async () => {
    setDataReducerPropertyNames(
      Object.getOwnPropertyNames((await dataReducer).posts_by_date)
    );
  }, [dataReducer]);
  return (
    <div className="publishFeedContainer">
      <div className="topInformationArea">
        <div className="colorMeanAreaDiv">
          <ColorMean
            props={{ color: "#ACACAC", name: "Published" }}
          ></ColorMean>
          <ColorMean
            props={{ color: "#3AC183", name: "Scheduled" }}
          ></ColorMean>
          <ColorMean
            props={{ color: "#F7BF38", name: "Need Approval" }}
          ></ColorMean>
          <ColorMean props={{ color: "#FB6450", name: "Error" }}></ColorMean>
          <ColorMean props={{ color: "#67B1F2", name: "Notes" }}></ColorMean>
        </div>
        <img
          className="userProfilePicture"
          src="/pictures/userPP.png"
          alt="user profile"
        ></img>
      </div>
      <div className="cardsArea">
        {dataReducerPropertyNames && dataReducer
          ? dataReducerPropertyNames.map((dateNameData, dateNameDataKey) => {
            return <CardLine key={dateNameDataKey} props={{date:dateNameData,data:dataReducer}}></CardLine>
            })
          : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataReducer: state.dataReducer,
  };
};

export default connect(mapStateToProps)(PublishFeed);
