import React ,{useState}from 'react';
import { Drawer ,IconButton,List,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
function DrawerComp({pages}) {
    const[openDrawer,setOpenDrawer]=useState()
    {pages.push('logo','lsls')}
    return (
        <React.Fragment>
            <Drawer open={openDrawer} 
            onClose={()=>setOpenDrawer(false)}
            >
                <List>
                    {
                        pages.map((page,index)=>(
                            <ListItemButton>
                            <ListItemIcon>
                                <ListItemText key={index}>
                                    {page}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        ))

                    }
                   
                </List>
            </Drawer>
            <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp