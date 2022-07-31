import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css"


function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar  className="sidebar__avatar"/>
        <h2>Alfredo Barillas</h2>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viwed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('design')}
          {recentItem('developer')}
        </div>
      </div>
    </div>
  )
}

export default Sidebar