import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    '&:hover': {
      backgroundColor: "transparent",
      opacity: "0.5",
      color: "white",
    },
    marginRight: 5,
  },
  footer: {
      marginLeft: "400px",
  },
}));

export default function NavBarMain() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static" color="primary">
        <Container maxWidth="md">
            <Toolbar className={classes.footer}>
                <Typography variant="body1" color="inherit">
                    &copy; 2021 Anart Ltda
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  );
}
