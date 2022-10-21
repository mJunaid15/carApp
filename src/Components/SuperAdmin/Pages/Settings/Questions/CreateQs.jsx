import React, {useState} from 'react'
import AuthUser from '../../../Auth/AuthUser'
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import '../../All.css'
import Icon from "../../../../img/Icon.png"
import delImg from "../../../../img/del.png";


const CreateQs = () => {
    // Dialog Code
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>CreateQs</div>
  )
}

export default CreateQs