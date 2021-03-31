import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

const Main = props => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthor(res.data.results))
            .catch(err => console.log(err))
    }, [])


    const handleDestroyAuthor = id => {
        Axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data.results))
            .catch(err => console.log(err))
    }

    return (
        author ?
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        author.map((a, i) => {
                            return <tr key={i}>
                                <td>{a.name}</td>
                                <td>
                                    <Link className="btn btn-warning btn-outline-info" to={`/edit/${a._id}`}>Edit</Link>
                                    <button className="btn btn-danger btn-outline-dark" onClick={() => handleDestroyAuthor(a._id)}>Delete</button>
                                    <Link className="btn btn-info btn-outline-dark" to={`/show/${a._id}`}>Display</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <h2>Loading...</h2>
    )
}

export default Main;