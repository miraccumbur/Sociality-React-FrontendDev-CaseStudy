import React from "react";
import Navigation from "../components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublishFeed from "../components/mainArea/publishFeed/PublishFeed";

function MainPage() {
  return (
    <div className="mainPageContainer">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<div>Empty</div>}></Route>
          <Route path="publish">
            <Route path="feed" element={<PublishFeed></PublishFeed>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
