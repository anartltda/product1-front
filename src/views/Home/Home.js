import React from "react";
import NavBarMain from "components/Navbars/NavBarMain.js";
import FooterMain from "components/Footer/FooterMain.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import team from "assets/img/team.png";
import clinica from "assets/img/clinica.jpg";
import vet from "assets/img/vet.jpg";

const useStyles = makeStyles(() => ({
    initial: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 108,
    },
    root: {
        padding: "120px",
        backgroundColor: "#3f51b5",
        color: "white"
    },
    container: {
        paddingTop: "70px",
        paddingBottom: "70px",
        paddingLeft: "70px"
    },
    text: {
        maxWidth: 345,
      },
    media: {
        height: 140,
    },
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px",
    }
}));
export default function Home() {

  const classes = useStyles();
    
  return (
    <div>
        <NavBarMain/>
        <div className={classes.root}>
            <Typography variant="h2" gutterBottom>
                Anart Ltda
            </Typography>
    
            <Typography variant="p" gutterBottom>
                Sistema de agendamento universal
            </Typography>
        </div>
        <Grid container className={classes.container}>
            <Grid item md={12}>
                <Typography variant="h6" > Quem somos? </Typography>
            </Grid>
            <Grid item md={6}>
                <Typography> 
                    apaga agora pelo amor de deus tá todo mundo pedindo pra apagar tem criança chorando aqui já tá todo mundo engatilhado por favor essa informação eh muito pesada traz traumas horríveis pra muita gente que fica com gatilho que passa mal desmaia apaga isso pelo amor de deus apaga isso por favor tem gente que realmente passa mal vendo isso apaga ta todo mundo pedindo pra apagar isso eh gatilha pra muita gente por favor apaga eh serio meu deus apaga isso as pessoas vão morrer tem gente sendo internada ja apaga pelo amor de deus to te pedindo apaga
                </Typography>
            </Grid>
            <Grid item md={6}>
                <img src={team} width="400px" alt="time" />;
            </Grid>
        </Grid>
        <Grid container className={classes.container}>
            <Grid item md={12}>
                <Typography className={classes.centered} variant="h4">
                    Nossos serviços
                </Typography>
            </Grid>    
            <Grid item md={3}>
                <Card className={classes.text}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={clinica}
                        title="Clinicas"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Clínicas
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Auxiliar empresas a realizar agendamentos de forma rápida e fácil.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Conheça mais
                        </Button>
                        <Button size="small" color="primary">
                            Planos
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card className={classes.text}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={vet}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Veterinário
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Auxiliar empresas a realizar agendamentos de forma rápida e fácil.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Conheça mais
                        </Button>
                        <Button size="small" color="primary">
                            Planos
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Typography>
                    apaga agora pelo amor de deus tá todo mundo pedindo pra apagar tem criança chorando aqui já tá todo mundo engatilhado por favor essa informação eh muito pesada traz traumas horríveis pra muita gente que fica com gatilho que passa mal desmaia apaga isso pelo amor de deus apaga isso por favor tem gente que realmente passa mal vendo isso apaga ta todo mundo pedindo pra apagar isso eh gatilha pra muita gente por favor apaga eh serio meu deus apaga isso as pessoas vão morrer tem gente sendo internada ja apaga pelo amor de deus to te pedindo apaga
                </Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.container}>
            <Grid item md={12}>
                <Typography className={classes.centered} variant="h4">
                    Planos
                </Typography>
            </Grid>
            <Grid item md={6}>
                <Typography>
                    apaga agora pelo amor de deus tá todo mundo pedindo pra apagar tem criança chorando aqui já tá todo mundo engatilhado por favor essa informação eh muito pesada traz traumas horríveis pra muita gente que fica com gatilho que passa mal desmaia apaga isso pelo amor de deus apaga isso por favor tem gente que realmente passa mal vendo isso apaga ta todo mundo pedindo pra apagar isso eh gatilha pra muita gente por favor apaga eh serio meu deus apaga isso as pessoas vão morrer tem gente sendo internada ja apaga pelo amor de deus to te pedindo apaga
                </Typography>
            </Grid>
            <Grid item md={3}>
                <Card className={classes.text}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={team}
                        title="Clinicas"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            um plano interessante
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            hmmmmmmm ques vantagens legais
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            vamo fechar?
                        </Button>
                        <Button size="small" color="primary">
                            depoimentos
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card className={classes.text}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={team}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            outro plano bacana
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            olha só pra esse plano incrivel. Só fecha quem é de verdade.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            vai comprar não, puta?
                        </Button>
                        <Button size="small" color="primary">
                            tá passada?
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        <FooterMain/>
    </div>
  );
}
