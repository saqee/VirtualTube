import React, {useState,useEffect} from 'react'
import {Paper,TextField} from '@material-ui/core'

export const SearchBar = ({onSubmit}) => {
  const [searchTerm,setSearch]=useState("")
  const onKeyPress=(event)=>{
     if(event.key="Enter"){
       onSubmit(searchTerm)
     }
  }
  return (
    <Paper elevation={6} style={{padding:'25px'}}> 
       <TextField fullWidth label="Seaarch..."
       value={searchTerm}
       onChange={(event)=>setSearch(event.target.value)}
       onKeyPress={onKeyPress}/>
    </Paper>
  )
}
 