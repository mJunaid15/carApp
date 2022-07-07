import { Button } from "@mui/material";



export const CreateBtn = (props)=>{
    return(
    <Button style={{
        backgroundColor: "#868686",
        color:"#fff",
        padding: '6px 22px',
        diplay:"flex",
        alignItems:"center"

    }}>
        {props.name}
        {props.icon}
    </Button>
    )
};