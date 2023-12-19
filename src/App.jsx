import { useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'

function App() {
  useEffect(()=>{
    API_Testing();
  })

  const API_Testing =()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
    })
  }

  return (

    <>
    <div className="App">
      App
    </div>
    </>
  )
}

export default App