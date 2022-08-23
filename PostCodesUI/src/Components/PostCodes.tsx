import { Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import PostCodeService from '../Services/postcode-service';

const useStyles = makeStyles((theme: any) => ({
  paperClass: {
    background: 'white',
    width: '150vh',
    borderRadius: '10px',
    borderColor: 'green',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: '3vh'
  },
  optionList: {

  },
  optionListItem: {
    cursor: 'pointer'
  }
}));

export default function PostCodes() {
  const classes = useStyles();
  const [postCode, setPostCode] = useState('');
  const [postCodes, setPostCodes] = useState([]);
  const [showResults, setShowResults] = useState(false);

  async function onPostCodeChanged(e: any) {
    const value = e;
    if (value.length > 0) {
      const response = await PostCodeService.GetAutoCompletePostCodes(value);
      const regx = new RegExp(`^${value}`, 'i');
      setPostCodes(response.data.sort().filter((x: string) => regx.test(x)));
    }
    setPostCode(e);
    setShowResults(true);
  }
  function suggestionSelected(e: any) {
    setPostCode(e);
    setShowResults(false);
  }
  const handleInputFocus = () => {
    setShowResults(true);
  }
 
  function RenderPostCodeSuggestions() {
    if (postCodes.length === 0) {
      return null;
    }
    return (
      <ul className={classes.optionList}>
        {postCodes.map((item: any) => <li className={classes.optionListItem} value={item} onClick={() => suggestionSelected(item)} key={item}>{item}</li>)}
      </ul>
    );
  }
  return (
    <>
      <Paper className={classes.paperClass}>
        <TextField id="outlined-basic"
          label="Please enter a word"
          value={postCode}
          onFocus={handleInputFocus}
          onChange={(e) => onPostCodeChanged(e.target.value)}
          variant="outlined"
          sx={{ width: 420 }} />
        {showResults ? <RenderPostCodeSuggestions /> : null}
      </Paper>
    </>
  )
}
