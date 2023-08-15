import React,{useState, useEffect} from 'react'
import Topbar from '../../components/Topbar'
import {useParams} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
/* import RelatedVideos from '../../components/RelatedVideos' */
import RelatedVideos from '../../components/RelatedVideos'
import './Video.css'

const Video = () => {
  const params = useParams()
  const [clickVideo, setClickVideo] = useState([])

  const getVideoData = async () => {
    
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=AIzaSyCcBxOSHDrj4zTDPnBlzZkfYU1ipAsJfA8&id=`+params.id)
    
    setClickVideo(res.data.items)
  }

  useEffect(() => { 
    getVideoData()
  },[params.id])


  return (
    <>
      <div className="top">
        <Topbar />
      </div>
      <div className="video">
      <div className="videoShow">
             {
               clickVideo && 
                clickVideo.map((clickVideo,index) => (
                <div className="videoContent" key={index}>
                <iframe width="853" height="480" src={"https://www.youtube.com/embed/"+params.id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="title">{clickVideo.snippet.title}</div>
                <div className="viewsDate">{
                  clickVideo.statistics.viewCount.length >=4 && clickVideo.statistics.viewCount.length <=6 ? (
                    `${Math.floor(clickVideo.statistics.viewCount/1000)}k`
                  
                    ) : clickVideo.statistics.viewCount.length >=7 && clickVideo.statistics.viewCount.length <=9 ? (
                      `${Math.floor(clickVideo.statistics.viewCount/1000000)}M` 

                    ) : clickVideo.statistics.viewCount.length >=10 && clickVideo.statistics.viewCount.length <=12 ? (
                      `${Math.floor(clickVideo.statistics.viewCount/1000000000)}b`

                    ) : null
                } - {moment(clickVideo.snippet.publishedAt).fromNow()}</div>
                <hr />
               <div className="youtuberName">{clickVideo.snippet.channelTitle}</div>
                <hr />
                </div>
            
            ))
            }
            </div>


 {/*        <div className="videoShow">
            <div className="videoContent">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/oSIv-E60NiU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="title">Learning Redux Toolkit Query w/ Mark Erikson</div>
            <div className="viewsDate">500k views - 5 days ago</div>
            <hr />
           <div className="youtuberName">CodeWithHary</div>
            <hr />
            </div>
        </div> */}

        <div className="relatedVideos">
            <RelatedVideos suggestedVideo={clickVideo}/>
        </div>
      </div>
    </>
  )
}

export default Video