//Imports Generales
import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import { GraphicEq } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

//CSS Styles
const useStyle = makeStyles(theme => ({
    icono: {
        color: "#1ee3cf",
        fontSize: 300,
    },
    title: {
        color: "#1ee3cf",
        textShadow: "2px 2px 2px gray",
        fontSize: "70px",
        position: "absolute",
        top: "95%",
        left: "35%"
    },
    subtitle: {
        color: "#1ee3cf",
        marginBottom: "3rem",
        fontSize: "45px",
        position: "absolute",
        top: "120%",
        left: "35%",
    },
    typedContainer: {
        position: "absolute",
        top: "20%",
        left: "-2%",
        transform: "translate (-50%, -50%)",
        width: "100%",
        textAlign: "center",
        zIndex: 1
    }
}))

// Header
const Header = () => {
    const classes = useStyle();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <GraphicEq className={classes.icono}></GraphicEq>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={['Quick-Graph']} typeSpeed={40}></Typed>
            </Typography>
            <br></br>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={['Design your graphics', 'Share them', 'Donwload them', 'Take advantage right here!']} 
                typeSpeed={40}
                backSpeed={60}
                loop
                >
                </Typed>
            </Typography>
        </Box>
    )
}

export default Header
