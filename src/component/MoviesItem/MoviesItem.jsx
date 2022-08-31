import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'


const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className='mm'>
    <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" style={{borderRadius:"none !important"}} />
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