import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import PaperComponent from '../core/PaperComponent';
import { postCodeDetails } from '../model/PostCodeDetails';
import PostCodeService from '../Services/postcode-service';

export default function PinCodeDetails(props: any) {
  const [pinCodeDetails, setPinCodeDetails] = useState(postCodeDetails);
  useEffect(() => {
    if (props.postCode.length >= 6) {
      const fetchPostCodeDetails = async () => {
        const response = await PostCodeService.GetPostCodeDetails(props.postCode);
        setPinCodeDetails(response.data);
    };

    fetchPostCodeDetails();
    }
  }, [props]);

  return (
    <PaperComponent details={pinCodeDetails} />
  )
}
