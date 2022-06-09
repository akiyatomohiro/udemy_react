// function App() {
//   return (
//     <>
//       <p>Helloooooo</p>
//       <input className="akiya" onClick={ () => { console.log(1122)} } />
//     </>
//   );
// }

const App = () => {
  const profiles = [
    { name: "aaaa", age: 33 },
    { name: "aadddddaa", age: 34 },
    { name: "allllla" }
  ]
  return (
    <>
      {
        profiles.map((p, index) => {
          return <Cat name={p.name} age={p.age} key={index}/>
        })
      }
      <p>Helloooooo</p>
      <input className="akiya" onClick={ () => { console.log(1122)} } />
    </>
  );
}

const Cat = (props) => {
  return (
    <div>
      にゃー{props.name}, {props.age}
    </div>
  )
}

Cat.defaultProps = {
  age: 20
}

export default App;
