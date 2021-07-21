import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
}));

export default function NavBarMain() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Anart Ltda
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Quem somos?
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Nossos serviços
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Planos
          </Typography>
          <Button className={classes.button} color="inherit" href="/login"  variant="outlined">Entrar</Button>
          <Button className={classes.button} color="inherit" href="/register"  variant="outlined">Registrar</Button>
          <Button className={classes.button} color="inherit" href="/admin/dashboard"  variant="outlined">Admin</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
