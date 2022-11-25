import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import DrawerComp from './DrawerComo'
function Header() {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    console.log(theme);
    const isMathch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMathch)
    const pages=['Product' ,'Services','ContactUs','About Us']
    return (
        <React.Fragment>
            <AppBar sx={{ background:'#063970' }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
            
                    {
                        isMathch? (
                            <>
                                <Typography sx={{fontSize:'1rem',marginLeft:'10%'}}>
                                    SHOPE
                                </Typography>
                                <DrawerComp pages={pages}/>
                            </>
                        )
                          :(
                            <>                            
                            <Tabs textColor='inherit'
                            value={value}
                            indicatorColor='secondary'
                            onChange={(e, value) => setValue(value)}
                        >
                            {
                                pages.map((page,index)=>(
                                    <Tab key={index} label={page} />
                                ))
                            }
                            {/* <Tab label='Product' />
                            <Tab label='Services' />
                            <Tab label='ContactUs' />
                            <Tab label='About Us' /> */}
                        </Tabs>
                        <Button sx={{ marginLeft: 'auto' }} variant='contained'>
                            Login
                        </Button>
                        <Button sx={{ marginLeft: '10px' }} variant='contained'>
                            SignUp
                        </Button>
                        </>
                          )
                    }
                   
                </Toolbar>
                {/* <DrawerComp /> */}
            </AppBar>
        </React.Fragment>
    )
}

export default Header