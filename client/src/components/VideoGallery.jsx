import React, { useEffect, useState } from 'react'/* 
import './VideoGallery.css' *//* 
import {useHistory} from 'react-router-dom' */
import { useSelector } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import {useHistory} from 'react-router-dom'
import './Relatedvideos.css'

const VideoGallery = () => {
  const history = useHistory()
  const item = useSelector((state) => state.input)
  const [video, setVideo] = useState([])

  const getApiData = async () => {
    
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict&type=video,channel,playlist&maxResults=20&key=AIzaSyCcBxOSHDrj4zTDPnBlzZkfYU1ipAsJfA8&q=`+item)
    
    setVideo(res.data.items)
  }

  useEffect(() => { 
    getApiData()
  },[item])


  const onVideo = (videoId) => {

      if(videoId == undefined) return

      history.push('/video/'+videoId)
  }

  return (
    <div className='videogalleryContainer'>
      
        { video && video.map((video,index) => (
          <div className="videoWrapper" key={index}>
        <div className="videoBox">
          <img onClick={() => onVideo(video.id.videoId)} src={video.snippet.thumbnails.medium.url} alt="" width="253.48" height="142.22" />
          <div className="videoTitle">{video.snippet.title}</div>
          <div className="channelDetails">
            <span className='channelName'>
            {video.snippet.channelTitle}
            </span>{` - `}
            <span className='publishDate'>
              {moment(video.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </div>
        </div> 
        ))
        } 
           
      
{/*        <div className="videoWrapper">
        <div className="videoBox">
          <img onClick={onImage} src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="videoWrapper">
        <div className="videoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="videoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="channelDetails">
            <span className='channelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='publishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>  */}
    </div>
  )
}

export default VideoGallery