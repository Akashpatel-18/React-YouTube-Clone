import React,{useState} from 'react'
import './Topbar.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getInput} from '../store/inputSlice'

const Topbar = () => {
    const history = useHistory()
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()

    const clicked = (e) => {
      e.preventDefault()
      dispatch(getInput(searchInput))
      
      history.push('/')
      setSearchInput('')

    }
  

  return (
    <>
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <img src="/images/YT_icon.PNG" width="110" height="35" alt=""/>
        </div>
    <div className="topbarCenter">
      <KeyboardBackspaceIcon className='backArrow'/>
      
      <div className="searchbar">
      <SearchIcon className='searchIcon'/>
      <form onSubmit={clicked}>
      <input type="search" placeholder='Search YouTube' value={searchInput} onChange={e => {setSearchInput(e.target.value)}} />
      </form>
      </div>
    </div>
    <div className="topbarRight">
      <SearchIcon className='searchIcon'/>
    </div>
   </div>
    </>
  )
}

export default Topbar

