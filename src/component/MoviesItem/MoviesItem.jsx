import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'reactjs-popup/dist/index.css'
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux'
import { addToFav, removeFromFav } from '../../app/slice/favSlice';

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl,id} = movieDetails
  const [fav,setFav]=React.useState([]);
  const fave = useSelector((state) => state.fav)
  const dispatch = useDispatch()
  function add(ids){
    dispatch(addToFav(ids))
   
   // setFav([...fav,ids])
    // fav.push(ids);
    //setFav(fav => [...fav, ids]);
  }
  function remove (ids){
    dispatch(removeFromFav(ids))
  }
  console.log(fave)
 
  return (
    <div className='mm'>
    <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" style={{borderRadius:"none !important"}} />

    <Fab style={{marginTop:"-1rem"}}>
      {fave.includes(id) ? <FavoriteIcon  onClick={()=>remove(id)}/>
      :
      <FavoriteBorderIcon onClick={()=>add(id)} />}
      </Fab>
      {/* <Popup
        modal
        trigger={
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container" style={{backgroundColor:"black",width:"600px"}} >
            <button
              className="close-button"
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup> */}
    </div>
  )
}

export default MovieItem