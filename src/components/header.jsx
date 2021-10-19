import { HolidayVillage } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography, Box } from "@mui/material";

function Header () {
    return(
        <AppBar>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='div'>
                    PETS HOTEL
                </Typography>
                <IconButton
                    color='inherit'>
                    <HolidayVillage/>
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Button 
                    variant="text"
                    color="inherit"
                    size='large'>
                    Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;