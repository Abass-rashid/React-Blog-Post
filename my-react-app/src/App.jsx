import './App.css'

function App() {
  const title = "My Blog Bost";
  const likes = 100;
  const person = {name: "abass", age: 21, isMan: true}
  const link = "https//www.google.com"
  return (
  <div className="App">
    <div className="content">
      <h1>{title}</h1>
      <p>Liked {likes} Times.</p>
      <h4>{person.name}</h4>
      <h3>{3}</h3>
      <h5>{"Abass is leraning react js"}</h5>
      <p>{[3,4,5,57,8,8,8]}</p>
      <h4>{Math.random()* 20}</h4>
      <a href={link}>Google Site</a>
    </div>
  </div>
  )
}

export default App
