import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

export const Loader = () => {
    return (
        <div className="loader">

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
