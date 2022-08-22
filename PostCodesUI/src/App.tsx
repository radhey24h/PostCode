import React, { useEffect, useState } from 'react';
import { Autocomplete, Paper, CircularProgress, TextField } from '@mui/material';
import PinCodeDetails from './Components/PinCodeDetails';
import './App.css';
import PostCodeService from './Services/postcode-service'

function App() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [postCode, setPostCode] = useState('');
  const loading = open && options.length === 0;

  const onChangeHandle = async (value: any) => {
    PostCodeService.GetAutoCompletePostCodes(value).then(x => {
      setOptions(x.data ? x.data : []);
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const onInputChange = (event: any, value: any, reason: any) => {
    if (value.length >= 6) {
      setPostCode(value);
    } else {
      setPostCode('');
    }
  };

  return (
    <div className="App">
      <Paper style={{
        background: 'white',
        width: '150vh',
        borderRadius: '10px',
        borderColor: 'green',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: '3vh'
      }}>
        <Autocomplete
          id="postcode"
          style={{ width: 400 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option: any, value: any) => option === value}
          getOptionLabel={(option: any) => option}
          onInputChange={onInputChange}
          options={options}
          loading={loading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              label="Please select post code"
              variant="outlined"
              onChange={ev => {
                if (ev.target.value !== "" || ev.target.value !== null) {
                  onChangeHandle(ev.target.value);
                }
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />
      </Paper>
      {postCode === '' ? null : <PinCodeDetails postCode={postCode} />}
    </div>
  );
}

export default App;
