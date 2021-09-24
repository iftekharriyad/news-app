import React,{useState, useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import NewsList from './components/NewsList'
import Search from './components/Search'
import Progress from './components/Progress'
import Copyright from './components/Copyright'
import './App.css';

function App() {
  const [searchClicked,setSearchCliked]=useState(false);
  const [newsArrived,setNewsArrived] = useState(false);
  const [topNewsArrived,setTopNewsArrived] = useState(false);
  const [topNews,setTopNews] = useState();
  const [news,setNews] = useState()

  const apiKey = "19bd167d1e5b43b6a9cfe53b3746830a"
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
    .then(response=>response.json())
    .then(data=>{
      setTopNews(data.articles)
      setTopNewsArrived(true);
    })
  },[])

  function handleSearch(searchText){
    setSearchCliked(true)
    fetch(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`)
    .then(response=>response.json())
    .then(data=>{
      setNews(data.articles)
      setNewsArrived(true);
    })
  }
  return (
    <>
    <CssBaseline/>
    <Container maxWidth='lg'style={{margin:"50px auto"}}>
      <Typography variant='h4' component='h1' textAlign="center" gutterBottom>
          News App
      </Typography>
      <Search handleSearch={handleSearch}/>
      {
        searchClicked ? (
          newsArrived ?(
            <NewsList newsType="Search Results" news={news} handleArrived={setNewsArrived}/>
          ):(
            <Progress/>
          )
          
        ):(
          topNewsArrived ?(
            <NewsList newsType="Top News" news={topNews} handleArrived={setTopNewsArrived}/>
          ):(
            <Progress/>
          )
          
        )
      }
      <Copyright/>
    </Container>
    </>
  );
}

export default App;
