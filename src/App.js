import './App.css';

function App() {
  const handleInputChange=(e)=> {
    fetch('https://dummyjson.com/products/1')
    .then((data) => data.json())
    .then((data) => console.log(data))
  }
  // const debounce = (callback, delay) => {
  //   let timerId = "";
  //   return (...args) =>{
  //     clearTimeout(timerId);
  //     timerId = setTimeout (() => {
  //       callback(args);
  //     },delay)
  //   }
  // }
const debounce=(callback, delay) =>{
  let timerId = "";
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(args)
    },delay)
  }
}
  return (
    <div className="App">
      <input placeholder='Enter search item' onChange={debounce(handleInputChange,1000)}/>
    </div>
  );
}

export default App;
