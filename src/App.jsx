import { useEffect, useState } from 'react'
import './App.css'
import { apiData } from './apiData';

function App() {
  const [count, setCount] = useState([]);

  useEffect( () => {
    let response = apiData()
    response.then( res => setCount(res))
    //setCount(cover())
  },[])
  //console.log(count)
  

  return (
    <div className="App">
      {count.map( item => <div key={item.id}><p>{item.id}</p><img src={item.bannerURL} /></div> )}
    </div>
  )
}

export default App
