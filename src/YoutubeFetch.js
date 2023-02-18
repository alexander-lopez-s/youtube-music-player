import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbSearch } from 'react-icons/tb';
import SideBar from "./SideBar";


const YoutubeFetch = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(""); // initial value in the search bar is an empty string

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    async function handleSubmit() {
        await axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${search}&type=video&key=AIzaSyA8vTOkffJr6P2IteJovvbVPN8Dff9aur0`
            )
            .then((res) => {
                setData(res.data.items);
                console.log(res.data.items)
            });
    }

    useEffect(() => {
        handleSubmit();
    }, []);


    return (
        <>
            <div className="main-container">
                <img src="https://res.cloudinary.com/dembmmjyq/image/upload/v1676754830/logo-youtube_oiwpl7.webp" alt="youtube-logo" className="ytLogo"></img>
                <input name="video-finder" onKeyPress={(e) => { if (e.key === "Enter") { handleSubmit() } }} onChange={handleChange} type="text" onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Type your search"} placeholder="Type your search" />
                <button onClick={handleSubmit} type="submit"><TbSearch /></button>
            </div>
           <div className="videos-gallery">
            {data.map((video) => (
                <div className="pl-item" key={video.id}>
                    <iframe title={video.snippet.title} width="278" height="156" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" gesture="media" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <h5>{video.snippet.title}</h5>
                </div>
            ))}
            </div>
        </>
    );
}

export default YoutubeFetch