import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

export const AlertMessage = ({message}) => {

  const [open, setOpen] = useState(false);

  return(
    <Snackbar
      message={message}
      autoHideDuration={4000}
    />
  )

};