import React, { useState, useEffect } from 'react';
import { Nav, NavBarContainer, NavLogo } from './NavBarElements';
import { MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements';
import { NavBtn, NavBtnLink } from './NavBarElements'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
/*import { IconContext } from 'react-icons/lib'
Encapsular o código nessa tag para alterar as propriedades de todos os ícones nela
<IconContext.Provider value={{ color: '#fff }}></IconContext.Provider>*/


export default function NavBarMain(prop) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () =>{
    if(window.scrollY>= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>Anart</NavLogo>
          <MobileIcon onClick={prop.toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to='sobre'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Quem somos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='discover' 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Anart Agenda
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='services' 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Nossos serviços
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='team'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                A equipe
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>Entrar</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
}