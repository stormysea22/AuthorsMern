import { Link } from '@reach/router';

const AuthorForm = props => {
    
    const { inputs, handleInputChange, handleSubmit, title, submitValue, errors } = props;

    return (
        <form onSubmit={handleSubmit} className="col-6 mxauto">
            <h2>{title}</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.name}
                />
                <span className="text-danger">
                    {errors.name ? errors.name.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="quote">Quote:</label>
                <input
                    type="text"
                    name="quote"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.quote}
                />
                <span className="text-danger">
                    {errors.quote ? errors.quote.message : ""}
                </span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary" />
            <Link className="btn btn-info btn-outline-dark" to="/">Cancel</Link>
        </form>
    )
}
export default AuthorForm;
