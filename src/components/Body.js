import React from 'react';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    particleCanva: {
        position: "absolute",
        opacity: "0.5"
    }
})

const Body = () => {
    const classes = useStyle();
    return (
        <div>
            <Navbar></Navbar>
            <Particles 
                canvasClassName={classes.particleCanva}
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1200
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "#1ee3cf"
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                size_min: 0.1,
                                sync: true                            
                            }
                        },
                        opacity: {
                            value: 1,
                            random:true,
                            animation: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}>
                </Particles>
        </div>
    )
}

export default Body
