import React from "react"
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import { selectUser } from "./features/counter/userSlice"
import "./HeaderOption.css"

function HeaderOption({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className='headerOption__icon' />}

      {/* If avatar is set to true display the first letter of the email */}
      {avatar && (
        <Avatar className="headerOption_icon">
          {user?.email[0]}
        </Avatar>
      )}
      

      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption