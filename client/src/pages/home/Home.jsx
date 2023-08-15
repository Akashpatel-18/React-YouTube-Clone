import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import VideoGallery from '../../components/VideoGallery'
import './Home.css'
const Home = () => {

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div>
          <Sidebar />
        </div>
        <div className="homeBody">
          <VideoGallery />
        </div>
      </div>
    </>
  )
}

export default Home