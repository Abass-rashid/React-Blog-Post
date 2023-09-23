import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { name: "My website of dev", author: "Marish", id: 1 },
    { name: "Portfolio Website", author: "Abaz", id: 2 },
    { name: "school Website", author: "Jafar", id: 3 },
    { name: "Email Marketing Website", author: "Istarlin", id: 4 }
  ]);
   const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
   }
  return (
    <div className="home">
   <BlogList blogs={blogs} title="My Blog !" handleDelete={handleDelete}/>
  
    </div>
  );
}

export default Home;
