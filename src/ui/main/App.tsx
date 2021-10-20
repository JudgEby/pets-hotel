import React, { useState } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import { createTheme, Grid, Paper, Switch } from '@mui/material';
import Header from '../components/header';

function App() {
	const [darkMode, setDarkMode] = useState(false)
	const theme = createTheme({
		palette:{
			mode: darkMode ? 'dark':'light',
		}
	})
	return (
		<ThemeProvider theme={theme}>
			<Paper>
				<Grid container direction='column' height='100vh'>
					<Header/>
					<Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)}></Switch>
				</Grid>
			</Paper>
		</ThemeProvider>
		
	);
}

export default App