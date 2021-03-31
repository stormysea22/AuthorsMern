import { useState } from 'react';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const Create = props => {
    const [author, setAuthor] = useState({
        name: "",
        quote: ""
    })

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

        Axios.post("http://localhost:8000/api/authors", author)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.res.data.errors)
                setErrors(err.res.data.errors);
            })
    }

    return (
        <>
            <AuthorForm
                inputs={author}
                title="Create Author"
                submitValue="Create"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
        </>
    )
}

export default Create;