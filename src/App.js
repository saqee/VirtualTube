import './App.css';
import {Grid} from '@material-ui/core'
import {SearchBar} from './component/SearchBar'
import {VideoList} from './component/VideoList'
import VideoDetails from './component/VideoDetails'
import youtube from './api/Youtube'
import React,{ useState } from 'react'
function App() {
  const [videos,setVideos]=useState([])
  const [selectedvideos,setselectedvideos]=useState({id:{},snippet:{}})
  const handleSubmit=async(searchTerm)=>{
      const {data:{items:videos}}=await youtube.get("search",{
        params:{
          part:"snippet",
          maxResults:5,
          key:"AIzaSyA0lftA0JcuMdOhsdbBPcZvEQXN45pNEUY",
          q:searchTerm
        }
      })
      setVideos(videos);
      setselectedvideos(videos[0])
  }
  return (
    <Grid container spacing={10} style={{justifyContent:"center"}}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
                <SearchBar onSubmit={handleSubmit}/>
            </Grid>
            </Grid> 
            </Grid>
            <Grid item xs={6}>
                <VideoDetails video={selectedvideos}/>
                </Grid>
         
          <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={setselectedvideos}/>
            </Grid>
       
    </Grid>
  );
}

export default App;
