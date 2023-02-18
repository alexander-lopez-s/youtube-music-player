import { AiFillHome } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { HiTrendingUp } from 'react-icons/hi';
import { MdCardMembership } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FcReddit } from 'react-icons/fc';

const SideBar = () => {

    return (
    <>
    <div class="nav-outer-container">
  <div class="nav-content-container">
    <ul class="nav-main-sections-container">
      
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><AiFillHome/></span>
                  <span class="nav-link-text">Home</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
       <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><BsPersonCircle/></span>
                  <span class="nav-link-text">My Channel</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><HiTrendingUp/></span>
                  <span class="nav-link-text">Trending</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><MdCardMembership/></span>
                  <span class="nav-link-text">Subscriptions
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
        <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><MdHistory/></span>
                  <span class="nav-link-text">History</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
        <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><MdOutlineWatchLater/></span>
                  <span class="nav-link-text">Watch Later</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
    </ul>
    
    <hr />
    
    <ul class="nav-main-sections-container">
      
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <h3 class="nav-main-section-header">
            <a class="nav-main-section-header-a" href="#">Library</a>
          </h3>
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><i class="ion-ios-paper icon"></i></span>
                  <span class="nav-link-text">Study mix</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
       <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><i class="ion-ios-paper icon"></i></span>
                  <span class="nav-link-text">Running tunes</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><i class="ion-ios-paper icon"></i></span>
                  <span class="nav-link-text">Evening/Chill</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
       <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><i class="ion-thumbsup icon"></i></span>
                  <span class="nav-link-text">Liked videos</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
    </ul>
    
    <hr />
    
    <ul class="nav-main-sections-container">
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <h3 class="nav-main-section-header">
            <a class="nav-main-section-header-a" href="#">Subscriptions</a>
          </h3>
          <ul class="nav-main-section-links">

            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
<FcReddit/>                  
</span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">8</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers"></span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers"></span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">5</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">17</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">12</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">3</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">25</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">7</span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers"></span>
                  </span>
                </span>
              </a>
            </li>
            
                <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-img">
                  <FcReddit/>                  
                  </span>
                  <span class="nav-link-text">Cat-Lyfe
                    <span class="nav-link-numbers">2</span>
                  </span>
                </span>
              </a>
            </li>
  
          </ul>
        </div>
      </li>
      
    </ul>
        
    <hr />
    
     <ul class="nav-main-sections-container">
      
      <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><i class="ion-ios-plus icon"></i></span>
                  <span class="nav-link-text">Browse Channels</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
       <li class="nav-main-section">
        <div class="nav-main-section-inner-container">
          <ul class="nav-main-section-links">
            <li class="nav-main-section-link">
              <a href="#" class="nav-main-section-link-a">
                <span class="link-container">
                  <span class="nav-link-icon"><i class="ion-ios-gear icon"></i></span>
                  <span class="nav-link-text">Manage Subscriptions</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      
    </ul>
    
  </div>
</div>
</>
    )
}

export default SideBar;