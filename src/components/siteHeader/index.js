import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  inactiveLink: {
    color: 'white',
    padding : theme.spacing(1),
    fontSize: '1.5rem'
  },
  activeLink: {
    color: 'black',
    padding : theme.spacing(1),
    fontSize: '1.5rem',
    background: "#bfbfbf"
  }
}));

const SiteHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { token, signout } = useContext(AuthContext);
  

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Movies", path: "/" },
    { label: "TV", path: "/tv" },
    { label: "People", path: "/persons" },
    { label: "Create Movie", path: "/fantasymovie/form" },
    { label: "Upcoming Movies", path: "/movies/upcoming" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Must Watch", path: "/movies/mustwatch" },

  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return ( 
    <>
      <AppBar className={classes.appbar}
      position="fixed" elevation={0} color='secondary'> 
        <Toolbar>
        {token ? (
        <p>
          Welcome! <button onClick={() => signout()}>Sign out</button>
        </p>
      ) : (
        <p>
          You are not logged in{" "}
          <button onClick={() => navigate("login")}>Login</button>
        </p>
      )}

          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Typography variant="h6" className={classes.title}>
            All you ever wanted to know about Movies and TV Shows!
          </Typography>
          
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                  isActive ? classes.activeLink : classes.inactiveLink
                }
                  color="inherit"
                  
                >
                  {opt.label}
                </NavLink> 
              ))}
            </>
            
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;