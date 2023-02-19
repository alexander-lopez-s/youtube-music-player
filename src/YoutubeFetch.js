import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbSearch } from 'react-icons/tb';
import ReactPlayer from 'react-player/lazy'


const YoutubeFetch = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(""); // initial value in the search bar is an empty string

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    async function handleSubmit() {
        await axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&type=video&key=AIzaSyCGK_NE0PeAyDgtvYUD3NvbVadi3-1UskU`
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
                <img src="https://res.cloudinary.com/dembmmjyq/image/upload/v1676754830/logo-youtube_oiwpl7.webp" alt="youtube-logo" className="ytLogo"></img>
                <input name="video-finder" onKeyPress={(e) => { if (e.key === "Enter") { handleSubmit() } }} onChange={handleChange} type="text" onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Type your search"} placeholder="Type your search" />
                <button onClick={handleSubmit} type="submit"><TbSearch /></button>
            </div>
           <div className="videos-gallery">
            {data.map((video) => (
                <div className="iframe-container" key={video.id}>
                    <ReactPlayer 
                    url={`https://www.youtube.com/embed/${video.id.videoId}`} 
                    playing
                    controls
                    light = {`${video.snippet.thumbnails.medium.url}`}
                    width={330}
                    height={190}
                   />
                    <h5>{video.snippet.title}</h5>
                </div>
            ))}
            </div>
        </>
    );
}

export default YoutubeFetch