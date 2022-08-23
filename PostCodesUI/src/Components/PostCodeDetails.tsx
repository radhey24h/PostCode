import { useEffect, useState } from 'react';
import PaperComponent from '../core/PaperComponent';
import { postCodeModel } from '../model/PostCodeModel';
import PostCodeService from '../Services/postcode-service';

export default function PostCodeDetails(props: any) {
  const [pinCodeDetails, setPinCodeDetails] = useState(postCodeModel);
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
