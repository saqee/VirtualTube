import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'
export const VideoList = ({videos,onVideoSelect}) => {
  const listOfVideos=videos.map((video)=>(<VideoItem onVideoSelect={onVideoSelect}
  video={video}
  key={video.id.videoId}/>))
  return (
    <Grid container spacing={10}>{listOfVideos}</Grid>
  )
}
