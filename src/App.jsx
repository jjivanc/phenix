import { useEffect, useState } from 'react'
import { apiData } from './apiData';
import { BoxItem } from './components/BoxItem';

function App() {
  const [count, setCount] = useState([]);

  useEffect( () => {
    let response = apiData()
    response.then( res => setCount(res))
    //setCount(cover())
  },[])
  //console.log(count)
  

  return (
    <div className='flex flex-wrap gap-2'>
      {count.map( item => <BoxItem key={item.id} title={item.id} bannerURL={item.bannerURL} /> )}
    </div>
  )
}

export default App
