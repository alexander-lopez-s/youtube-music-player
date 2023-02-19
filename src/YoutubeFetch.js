import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbSearch } from 'react-icons/tb';
import { IoMdMic } from 'react-icons/io';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player/lazy'
import moment from "moment";


const YoutubeFetch = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(""); // initial value in the search bar is an empty string

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    async function handleSubmit() {
        await axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${search}&type=video&key=AIzaSyAelCLaWF0rng9HQSOApjg0iRr_4O9MDXM`
            )
            .then((res) => {
                setData(res.data.items);
                console.log(res.data.items)
            });
    }

    useEffect(() => {
        handleSubmit();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            <div className="main-container">
                <div className="search-bar">
                <img src="https://res.cloudinary.com/dembmmjyq/image/upload/v1676754830/logo-youtube_oiwpl7.webp" alt="youtube-logo" className="ytLogo"></img>
                <input name="video-finder" onKeyPress={(e) => { if (e.key === "Enter") { handleSubmit() } }} onChange={handleChange} type="text" onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Type your search"} placeholder="Type your search" />
                <button onClick={handleSubmit} type="submit"><TbSearch /></button>
                <p className="mic"><IoMdMic /></p>
                </div>
                <div className="icons">
                    <p className="cam"><AiOutlineVideoCameraAdd /></p>
                    <p className="notifications"><IoMdNotificationsOutline /></p>
                    <p className="user"><FaRegUserCircle /></p>
                </div>
            </div>
            <div className="videos-gallery">
                {data.map((video) => (
                    <div className="iframe-container" key={video.id}>
                        <ReactPlayer
                            url={`https://www.youtube.com/embed/${video.id.videoId}`}
                            playing
                            controls
                            light={`${video.snippet.thumbnails.medium.url}`}
                            width={350}
                            height={190}
                        />
                        <div className="channel-avatar">
                            <div className="avatar-container"><img className="avatar" src={`${video.snippet.thumbnails.medium.url}`} alt={video.snippet.channelTitle} /></div>
                            <div className="video-title"><p>{video.snippet.title}</p></div>
                        </div>
                        <div className="channel-info">
                            <p className="channel">{video.snippet.channelTitle}</p>
                            <p className="channel">{moment(`${video.snippet.publishTime}`, "YYYYMMDD").fromNow()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default YoutubeFetch