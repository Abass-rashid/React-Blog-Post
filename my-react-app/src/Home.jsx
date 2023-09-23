const Home = () => {

  const handleClick = () => {
    console.log("Hello, Net Ninja!");
  }
  const handleClickAgain = (name,event) => {
    console.log(`Hello ${name} how are you! ${event.target}`)
  }

  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={ ()=> {handleClickAgain("Jafar",event)}}>Click me Again</button>
    </div>
   );
}
 
export default Home;