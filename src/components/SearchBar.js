import { useState } from 'react';
import {TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({onSubmit}) {
    
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(userInput);
    setUserInput('');
  }
    return (
        <form onSubmit={handleSubmit}>
          <TextField
            id="photo-search-textfield"
            value={userInput}
            margin="normal"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setUserInput(e.target.value)}
          />
      </form>
    )
}