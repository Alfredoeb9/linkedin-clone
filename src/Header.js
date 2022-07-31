import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from "./features/counter/userSlice"
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import ava from "../src/63.jpg"
import { auth } from './firebase';

function Header() {
  const dispatch =  useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img src="" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Chat" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={ava} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header