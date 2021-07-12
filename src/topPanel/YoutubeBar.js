import React from 'react';
import './stylesheet/YoutubeBar.css';
import { FaYoutube, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { MdMic, MdNotifications } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoAppsSharp } from "react-icons/io5";


function YoutubeBar() {
    return(
        <div className="youtubeBar">
            <div className="youtubeComponent">
                <FaYoutube className="youtubeComponentLogo"/>
                <div>YouTube</div>
            </div>

            <div className="searchComponent">
                <input className="searchBar" type="search" placeholder="Search" />
                <FaSearch className="searchButton" />
                
                <MdMic className="micComponent" />
            </div>
            <div className="otherIconComponent">
                <RiVideoAddLine className="createComponent" />
                <IoAppsSharp className="youtubeAppsComponent" />
                <MdNotifications className="notificationComponent" />
                <FaRegUserCircle className="userComponent" />
            </div>
        </div>
    )
}
export default YoutubeBar;