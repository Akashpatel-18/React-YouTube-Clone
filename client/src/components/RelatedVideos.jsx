import React,{useState, useEffect} from 'react'/* 
import './Relatedvideos.css' */
import './VideoGallery.css'
import axios from 'axios'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

const RelatedVideos = (props) => {
  
  const history = useHistory()
  const [video, setVideo] = useState([])

  const getApiData = async () => {
    
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict&type=video,channel,playlist&maxResults=20&key=AIzaSyCcBxOSHDrj4zTDPnBlzZkfYU1ipAsJfA8&q=`+props.suggestedVideo[0].snippet.channelTitle + " channel popular video")
    
    setVideo(res.data.items)
  }

  useEffect(() => { 
    getApiData()
  },[props.suggestedVideo[0]])

  const onVideo = (videoId) => {

    if(videoId == undefined) return

    history.push('/video/'+videoId)
}

  return (
    <>
   <div className='relatedvideogalleryContainer'>

    { video && video.map((video,index) => (
      
      <div className="relatedvideoWrapper" key={index}>
        <div className="relatedvideoBox">
          <img onClick={() => onVideo(video.id.videoId)} src={video.snippet.thumbnails.medium.url} alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">{video.snippet.title}</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            {video.snippet.channelTitle}
            </span>{` - `}
            <span className='relatedpublishDate'>
              {moment(video.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div> 
      ))
    }
      
      {/*      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>      <div className="relatedvideoWrapper">
        <div className="relatedvideoBox">
          <img src="/images/Barcelona.jpg" alt="" width="253.48" height="142.22" />
          <div className="relatedvideoTitle">MongoDb Tutorial For Beginners in Hindi 🔥🔥 MongoDb Tutorial For Beginners in Hindi 🔥🔥</div>
          <div className="relatedchannelDetails">
            <span className='relatedchannelName'>
            CodeWithHarry
            </span>{` - `}
            <span className='relatedpublishDate'>
              5 days ago
            </span>
          </div>
        </div>
      </div>       */}
      
      
    </div>
    </>
  )
}

export default RelatedVideos