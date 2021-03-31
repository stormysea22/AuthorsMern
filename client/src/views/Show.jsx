import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, navigate } from '@reach/router';

const Show = props => {

    const [author, setAuthor] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => setAuthor(res.data.results[0]))
            .catch(err => console.log(err))
    }, [props])

    const handleDestroyAuthor = id => {
        Axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        author ?

            <div className="card col-4 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{author.name}</h2>
                    <p className="card-text">Quote: {author.quote}</p>
                    <Link className="btn btn-warning btn-outline-info" to={`/edit/${props.id}`}>Edit</Link>

                    <button className="btn btn-danger btn-outline-dark" onClick={() => handleDestroyAuthor(props.id)}>Delete</button>
                </div>

            </div> : <h2>Loading...</h2>
    )
}

export default Show;