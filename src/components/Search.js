import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Search(props) {
    const [searchText,setSearchText] = useState("");
    function handleChange(e){
        setSearchText(e.target.value)
    }
    function handleSearchClick(event){
      event.preventDefault();
        props.handleSearch(searchText);
    }
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', margin:"0 auto", display: 'flex', alignItems: 'center', width: 600 }}
        onSubmit={handleSearchClick}
      >
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search News"
          inputProps={{ 'aria-label': 'search news' }}
          onChange={handleChange}
        />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={handleSearchClick}>
          <DirectionsIcon />
        </IconButton>
        
      </Paper>
    );
  }