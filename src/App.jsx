import { useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'
import { useDispatch , useSelector} from 'react-redux';
import { getApiConfiguration } from './feature/homeSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components Import
import Header from './components/header/Header'
import Home from './pages/home/Home';
import Details from './pages/details/Details'
import SearchResults from './pages/serachResult/SearchResults'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import footer from './components/footer/Footer'
import Footer from './components/footer/Footer';


function App() {


  const dispatch = useDispatch();
  // const url = useSelector((state)=>state.url)
  

  useEffect(()=>{
    API_Testing();
  })

  const API_Testing =()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      dispatch(getApiConfiguration(res))
    })
  }

  return (

    <>
    <BrowserRouter>
    <Header />
    <Routes>
       <Route path='/' element={ <Home/> } />
       <Route path='/:mediatype/:id' element={ <Details /> } />
       <Route path='/search/:query' element={ <SearchResults /> } />
       <Route path='/explore/:mediatype' element={<Explore />} />
       <Route path='*' element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
