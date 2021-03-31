import { useState, useEffect } from 'react';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const Edit = props => {

    const [author, setAuthor] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => setAuthor(res.data.results[0]))
            .catch(err => console.log(err))
    }, [props])

    const [errors, setErrors] = useState({
        name: "",
        quote: ""
    })

    const handleChange = e => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.put(`http://localhost:8000/api/authors/${props.id}`, author)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors);
            })
    }

    return (
        <>
            {
                author ?
                    <AuthorForm
                        inputs={author}
                        title="Edit Author"
                        submitValue="Update"
                        handleInputChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    /> : <h2>Loading...</h2>
            }
        </>
    )
}

export default Edit;