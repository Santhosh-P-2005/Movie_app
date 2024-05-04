import PropTypes from 'prop-types'

const MovieCard = (props) => {
    return (
        <div className="card" style={{ width: "22rem" }}>
            <img src={props.image} className="card-img-top" alt="Ghilli Vijay jumping" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Watch</a>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
}

export default MovieCard