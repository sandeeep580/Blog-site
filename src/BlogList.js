import { Link } from "react-router-dom";

const BlogList = ({blogsProp,Title}) => {

    return (  
        <div className="home">
            <h2>{Title}</h2>
            {blogsProp.map((blog) => 
                <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                </Link>
            )}
        </div>
    );
}
 
export default BlogList;