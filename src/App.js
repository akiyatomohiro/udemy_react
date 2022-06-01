// function App() {
//   return (
//     <>
//       <p>Helloooooo</p>
//       <input className="akiya" onClick={ () => { console.log(1122)} } />
//     </>
//   );
// }

const App = () => {
  return (
    <>
      <p>Helloooooo</p>
      <input className="akiya" onClick={ () => { console.log(1122)} } />
      <Cat />
      <Cat />
      <Cat />
    </>
  );
}

const Cat = () => {
  return (
    <div>
      にゃー
    </div>
  )
}

export default App;
