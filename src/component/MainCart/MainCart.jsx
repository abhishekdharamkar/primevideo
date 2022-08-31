import MovieSlider from "../MoviesSlider/MoviesSlider"
function MainCart(props) {
    const actionMovie = 'ACTION'
    const comedyMovie = 'COMEDY'
    const {moviesList} = props
    const actionMoviesList = moviesList.filter(
        movie => movie.categoryId === actionMovie,
    )

    const comedyMoviesList = moviesList.filter(
        movie => movie.categoryId === comedyMovie,
    )
    return(
        <div>
            <div className="movies-container" style={{color:"white",marginLeft:"6rem",marginTop:"3rem"}}>
        <p className="movies-heading" style={{fontWeight:"600", inlineSize: "fit-content" , marginBottom:"4px"}} >Action Movies</p>
        <MovieSlider moviesList={actionMoviesList} />
        <p className="movies-heading" style={{fontWeight:"600", inlineSize: "fit-content" , marginTop:"12px", marginBottom:"4px"}}>Comedy Movies </p>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
        </div>
    );

}export default MainCart;