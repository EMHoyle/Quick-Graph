// Import Generales
import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
    Box,
    Toolbar,
    AppBar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    ListItemIcon,
    Divider
} from '@material-ui/core';
import {
    Equalizer,
    GraphicEq,
    HomeWork,
    Storage,
    Drafts,
    //StarHalf,
    PieChart,
} from '@material-ui/icons';

//CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#1ee3cf",
        height: "100%",
    },
    menuDeco: {
        color: "#3c4245",
        textShadow: "2px 2px 2px gray"
    },
    boton: {
        color: "#1ee3cf",
        width: "35px",
        height: "35px"
    },
    icono: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
        color: "#3c4245",
    },
    barra: {
        position: "absolute",
        background: "#3c4245"
    }
}));

//Const Varias
const menuItems = [
    {
    listIcon: <HomeWork></HomeWork>,
    listText: "Home",
    listPath: "/"
    },
    {
    listIcon: <Storage></Storage>,
    listText: "Data",
    listPath: "/data"
    },
    {
    listIcon: <PieChart></PieChart>,
    listText: "Gráficos",
    listPath: "/graficos"
    },
    // {
    // listIcon: <StarHalf></StarHalf>,
    // listText: "Testimonios",
    // listPath: "/testimonios"
    // },
    {
    listIcon: <Drafts></Drafts>,
    listText: "Contacto",
    listPath: "/contacto"
    }
]

//Navbar
const Navbar = () => {
    const [state, setState] = useState ({
        left: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };
    const classes = useStyles();
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <GraphicEq className={classes.icono}></GraphicEq>
            <Divider></Divider>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key = {key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.menuDeco}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.menuDeco} primary={lsItem.listText}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <div>
            <Box component="nav">
                <AppBar className={classes.barra}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("left", true)}>
                            <Equalizer className={classes.boton}></Equalizer>
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#1ee3cf"}}>Quick-Graph</Typography>
                        <MobilRightMenuSlider anchor="left" open={state.left} onClose={toggleSlider("left", false)}>
                            {sideList("left")}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
)}

export default Navbar
