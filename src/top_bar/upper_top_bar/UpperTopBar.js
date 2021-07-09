import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdApps } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";

const Upper_Top_Bar = () =>{
    return(
        <div className="upper_top_bar">
            <div className="YoutubeComponentGroup">
                <a className="YoutubeBlock" href="https://www.youtube.com/">
                    <div className="YoutubeComponent">
                        <FaYoutube />
                        <p className="YoutubeName">YouTube</p>
                    </div>
                </a>
            </div>
            <div className="SearchInput">
                <input type="search" className="SearchForm" placeholder="Search..." />
                    <button className="SearchButton" type="button">
                        <span className="material-icons-outlined">
                            <IoSearchSharp />
                        </span>
                    </button>
            </div>
            <div className="OtherIconsGroup">
                <div>
                    <a className="RecorIcon" href="Record_icon_link">
                        <BsFillCameraVideoFill />
                    </a>
                </div>
                <div>
                    <a className="GoogleAppsIcon" href="Record_icon_link">
                        <MdApps />
                    </a>
                </div>
                <div>
                    <a className="GoogleBellIcon" href="Record_icon_link">
                        <VscBell />
                    </a>
                </div>
                <div>
                    <a className="GoogleBellIcon" href="Record_icon_link">
                        <BiUserCircle />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Upper_Top_Bar;