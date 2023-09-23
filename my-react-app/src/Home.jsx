import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { name: "My website of dev", author: "Marish", id: 1 },
    { name: "Portfolio Website", author: "Abaz", id: 2 },
    { name: "school Website", author: "Jafar", id: 3 },
    { name: "Email Marketing Website", author: "Istarlin", id: 4 }
  ]);

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.name}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
