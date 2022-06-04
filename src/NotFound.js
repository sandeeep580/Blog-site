import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The page can not be found</p>
            <Link to="/">Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;