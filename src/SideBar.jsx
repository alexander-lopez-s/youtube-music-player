import { AiFillHome } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { HiTrendingUp } from 'react-icons/hi';
import { MdCardMembership } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FcReddit } from 'react-icons/fc';
import { FcMusic } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';
import { FcBriefcase } from 'react-icons/fc';
import { FcFactory } from 'react-icons/fc';
import { FcVlc } from 'react-icons/fc';
import { FcNightLandscape } from 'react-icons/fc';

const SideBar = () => {

    return (
        <>
            <div className="nav-outer-container">
                <ul>
                    <li><AiFillHome /> Home</li>
                    <li><BsPersonCircle /> My Channel</li>
                    <li><HiTrendingUp /> Trending</li>
                    <li><MdCardMembership /> Subscriptions</li>
                    <li><MdHistory /> History</li>
                    <li><MdOutlineWatchLater /> Trending</li>
                    <li><HiTrendingUp /> Watch Later</li>
                </ul>
                <hr />

                <ul>
                    <li><FcMusic /> Piano mix</li>
                    <li><FcSportsMode /> Cardio tunes</li>
                    <li><FcBriefcase /> Sunday morning</li>
                    <li><FcVlc /> Random videos</li>
                    <li><FcFactory /> Work mode</li>
                    <li><FcNightLandscape/> Sleep time</li>
                </ul>
                <hr />
                <ul>
                    <li><FcReddit /> Metal bands </li>
                    <li><FcReddit /> Haggard Official </li>
                    <li><FcReddit /> Sergey Nevone </li>
                    <li><FcReddit /> Belgium Got Talent </li>
                    <li><FcReddit /> David Guetta </li>
                </ul>
                <hr />
                <ul>
                    <li> Browse channels </li>
                    <li> Manage Subscriptions</li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;