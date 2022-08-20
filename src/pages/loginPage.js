


import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


const theme = createTheme();

const LoginPage = () => {
  const {authenticate } = useContext(AuthContext);

  const login = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate('user1', password);
  };

  return (
    <>
    padding: "60px",
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <p>You must log in to view the protected pages </p>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
 
    
           
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Submit
            </Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    
    </>
    )
};

export default LoginPage;
