import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("abaz");
  const [age, setAge] = useState(28)
  const handleClick = () => {
   setName("istarlin");
   setAge(25);
  }
  

  return ( 
    <div className="home">
      <p>{name} is {age} years old.</p>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}
 
export default Home;