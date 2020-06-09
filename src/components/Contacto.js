import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import { Send } from '@material-ui/icons';

const InputField = withStyles({
    root:{
        "& label.Mui-focused": {
            color: '#1ee3cf'
        },
        "& label": {
            color: "#1ee3cf",
        },
        "& fieldset": {
            borderColor: "#1ee3cf",
        },
        "&:hover fieldset": {
            borderColor: "#1ee3cf",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#1ee3cf",
        }
    },
})(TextField);

const useStyles = makeStyles(theme=>({
    title: {
        color: "#1ee3cf",
        letterSpacing: "1px",
        top: "-50px",
        position: "absolute",
        textAlign: "center"
    },
    cont: {
        top: "200px",
        position: "relative"
    },
    boton: {
        color: "#1ee3cf",
        borderColor: "#1ee3cf",
        marginTop: "1rem"
    }
}));


const Contacto = () => {
    const classes=useStyles();
    return (
        <Box component="div">
            <Grid container justify="center">
                <Box component="form" className={classes.cont}>
                    <Typography variant="h5" className={classes.title}>
                       Hire or Contact
                    </Typography>
                    <InputField 
                        fullWidth={true} 
                        label="Name" 
                        variant="outlined"
                        inputProps= {{style: {color: "white"} }}
                        margin= "dense"
                        size= "large"
                    >
                    </InputField>
                    <br></br>
                    <br></br>
                    <InputField 
                        fullWidth={true} 
                        label="Email" 
                        variant="outlined" 
                        inputProps= {{style: {color: "white"} }}
                        margin= "dense"
                        size= "large"
                    >
                    </InputField>
                    <br></br>
                    <br></br>
                    <InputField 
                        fullWidth={true} 
                        label="Company" 
                        variant="outlined" 
                        inputProps= {{style: {color: "white"} }}
                        margin= "dense"
                        size= "large"
                    >
                    </InputField>
                    <br></br>
                    <Button
                        className={classes.boton}
                        fullWidth={true}
                        variant="outlined"
                        endIcon={<Send></Send>}
                    >
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacto