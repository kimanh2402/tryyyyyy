import React from 'react'
import { Grid, Paper } from '@mui/material';

const Square = () => {
             return (<Grid item>
                        <Paper sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            color: 'white',
                            padding: 'auto',
                            backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
                        }}>1</Paper>
                    </Grid>)
}

export default Square;
