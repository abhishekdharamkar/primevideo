import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MoviesItem/MoviesItem'

import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'reactjs-popup/dist/index.css'
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux'
import { addToFav, removeFromFav } from '../../app/slice/favSlice';

const MovieSlider = props => {
  const fave = useSelector((state) => state.fav.value)
  const favNo = useSelector((state) => state.fav.id)
  const dispatch = useDispatch()
// const [index, setIndex] = useState(0);
// const [showPrevArrow, setShowPrevArrow] = useState(false);
// const [showNextArrow, setShowNextArrow] = useState(slides.length > 1);

// const afterChange = (index: number) => { setIndex(index); };

// const beforeChange = (prev: number, next: number) => { 
//   setShowPrevArrow(next > 0);
//   setShowNextArrow(next < slides.length - 1);
// };

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <SamplePrevArrow />
  }
  const {moviesList} = props
  console.log("movies",moviesList);
  
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: moviesList.length==4?"block":"none", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
    return (
    <div className=''>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <div>
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
   
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider