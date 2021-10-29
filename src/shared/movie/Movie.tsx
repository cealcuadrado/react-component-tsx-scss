import './Movie.scss';

function Movie(props: {movie: {title: string, year: number, director: string}}) {
    return (
        <div className="movie">
            <h1>{props.movie.title} <small>({props.movie.year})</small></h1>
            <p>Dir. {props.movie.director}</p>
        </div>
    );
}

export default Movie;