import React from 'react'
import { SideBarContainer, Icon, CloseIcon } from './SideBarElements'
import { SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBarElements'

const SideBarMain = (prop) => {
    return (
        <SideBarContainer isOpen={prop.isOpen} onClick={prop.toggle}>
            <Icon onClick={prop.toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='sobre' onClick={prop.toggle}>Quem somos</SideBarLink>
                    <SideBarLink to='discover' onClick={prop.toggle}>Descubra</SideBarLink>
                    <SideBarLink to='services' onClick={prop.toggle}>Nossos serviços</SideBarLink>
                    <SideBarLink to='team' onClick={prop.toggle}>A equipe</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='/signin'>Sign In</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBarMain
