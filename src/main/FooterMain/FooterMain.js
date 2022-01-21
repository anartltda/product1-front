import React from "react";
import { 
  FooterContainer, FooterWrap, FooterLinksContainer, 
  FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
  FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, 
  WebsiteRights, SocialIcons, SocialIconLink
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll'

export default function FooterMain() {
  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Seções</FooterLinkTitle>
                <FooterLink to='/'>Home</FooterLink>
                <FooterLink to='/about'>Quem Somos</FooterLink>
                <FooterLink to='/agenda'>Anart Agenda</FooterLink>
                <FooterLink to='/services'>Serviços</FooterLink>
                <FooterLink to='/team'>Nossa Equipe</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Fale Conosco</FooterLinkTitle>
                <FooterLink to='/signin'>Contato</FooterLink>
                <FooterLink to='/signin'>Suporte</FooterLink>
                <FooterLink to='/signin'>Relatar Problema</FooterLink>
                <FooterLink to='/signin'>Feedback</FooterLink>
                <FooterLink to='/signin'>Avalie nosso serviço</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Outras páginas</FooterLinkTitle>
                <FooterLink to='/signin'>Login</FooterLink>
                <FooterLink to='/signin'>Cadastro</FooterLink>
                <FooterLink to='/signin'>Anart Agenda</FooterLink>
                <FooterLink to='/signin'>Quem somos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Parceiros</FooterLinkTitle>
                <FooterLink to='/signin'>Eduardo Dalto</FooterLink>
                <FooterLink to='/signin'>Total</FooterLink>
                <FooterLink to='/signin'>Marivaldo</FooterLink>
                <FooterLink to='/signin'>Dan Eletros</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              anart
            </SocialLogo>
            <WebsiteRights> 
              &copy; Anart Ltda {new Date().getFullYear()} 
              - All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href='//www.twitter.com/houdiniam' target='_blank' aria-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}