import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import PostCodeService from '../Services/postcode-service';

export default function PinCodeDetails(props: any) {
  const data = {
    postcode: '',
    country: '',
    region: '',
    adminDistrict: '',
    parliamentaryConstituency: '',
    area: ''
  };
  const [pinCodeDetails, setPinCodeDetails] = useState(data);
  useEffect(() => {
    if (props.postCode.length >= 6) {
      PostCodeService.GetPostCodeDetails(props.postCode).then((x: any) => {
        setPinCodeDetails(x.data ? x.data : []);
      }).catch((error: any) => {
        console.log(error);
      });
    }
  }, [props]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '48vh',
            height: '20vh',
            marginLeft: '2vh',
            marginTop: '4vh',
          },
          background: 'white',
          borderRadius: '10px',
          marginTop: '1vh',
          width:'155vh',
          height:'55vh'
        }}
      >
        
        <Paper elevation={3} >
        <Typography sx={{ p: 5 }}><b>Postcode :</b> {pinCodeDetails.postcode}</Typography>
        </Paper>
        <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Country :</b>{pinCodeDetails.country}</Typography></Paper>
        <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Region :</b> {pinCodeDetails.region}</Typography></Paper>
        <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Admin District :</b> {pinCodeDetails.adminDistrict}</Typography></Paper>
        <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Parliamentary Constituency : :</b> {pinCodeDetails.parliamentaryConstituency}</Typography></Paper>
        <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Area :</b> {pinCodeDetails.area}</Typography></Paper>
      </Box>

      {/* <Paper style={{
        background: 'white',
        width: '154vh',
        borderRadius: '10px',
        borderColor: 'green',
        padding: '1vh',
        marginTop: '3px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>

        <Box>
          <Typography sx={{ p: 5 }}><b>Postcode :</b> {pinCodeDetails.postcode}</Typography>

          <Typography sx={{ p: 5 }}><b>Country :</b>{pinCodeDetails.country}</Typography>
        </Box>
        <Box>
          <Typography sx={{ p: 5 }}><b>Region :</b> {pinCodeDetails.region}</Typography>

          <Typography sx={{ p: 5 }}><b>Admin District :</b> {pinCodeDetails.adminDistrict}</Typography>
        </Box>
        <Box>
          <Typography sx={{ p: 5 }}><b>Parliamentary Constituency : :</b> {pinCodeDetails.parliamentaryConstituency}</Typography>

          <Typography sx={{ p: 5 }}><b>Area :</b> {pinCodeDetails.area}</Typography>
        </Box>
      </Paper> */}
    </>
  )
}
