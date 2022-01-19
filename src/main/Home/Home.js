import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
//Criados do zero
import NavBarMain from "main/NavBarMain/NavBarMain.js";
import FooterMain from "main/FooterMain/FooterMain.js";
import SideBarMain from "main/SideBarMain/SideBarMain.js";
import HeroMain from "main/HeroMain/HeroMain";
import InfoMain from "main/InfoMain/InfoMain";
import { homeObjOne, homeObjTwo, homeObjThree } from "main/InfoMain/Data";
import Services from "main/ServicesMain/ServicesMain";

const styles = {
    root:{
        fontFamily: 'Encode Sans Expanded, sans-serif',
    }
  };
  
  const useStyles = makeStyles(styles);
  

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyles(styles)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={classes.root}>
            <SideBarMain isOpen={isOpen} toggle={toggle}/>
            <NavBarMain toggle={toggle}/>
            <HeroMain/>
            <InfoMain {...homeObjOne}/>
            <InfoMain {...homeObjTwo}/>
            <Services/>
            <InfoMain {...homeObjThree}/>
            <FooterMain/>
        </div>
    );
}