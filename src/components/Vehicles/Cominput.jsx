import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Copy from '../../images/Copy.png';

export default function FullWidthTextField() {
  return (
    
    <Box
      sx={{
        width: 1800,
        maxWidth: '100%',
      }}
      
    >
    
      <TextField fullWidth label="Enter date " id="Enter date" />

    </Box>
  );
}
