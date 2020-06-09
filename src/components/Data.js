import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    title: {
        color: 'white',
        top: '150px',
        position: 'absolute'
    }
})

const Data = () => {
    const classes = useStyle();
    return (
        <div>
            <h1 className={classes.title}> Acá se desarrollara el modulo de Data Dinámica </h1>
        </div>
    )
}

export default Data
