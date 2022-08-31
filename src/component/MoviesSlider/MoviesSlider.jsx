import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MoviesItem/MoviesItem'

const MovieSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  const {moviesList} = props
  console.log("movies",moviesList);
    return (
    <div>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider