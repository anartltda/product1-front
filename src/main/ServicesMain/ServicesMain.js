import React from 'react'
import { 
    ServicesContainer, ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP, BtnWrap
} from 'main/ServicesMain/ServicesElements'
import Icon1 from '../../assets/img/homeImg/svg4.svg'
import Icon2 from '../../assets/img/homeImg/svg5.svg'
import Icon3 from '../../assets/img/homeImg/svg6.svg'
import Icon4 from '../../assets/img/homeImg/svg7.svg'
// import { Button } from '../ButtonElement'
// import Button from '@material-ui/core/Button';
import BudgetDialog from '../BudgetDialog'

const ServicesMain = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Sites e Hotsites</ServicesH2>
                    <ServicesP>Desenvolvemos sites e hotsites, garantindo sua presença na Internet.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Blogs</ServicesH2>
                    <ServicesP>Tenha um espaço só seu para divulgação de contéudo frequente.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Sistemas</ServicesH2>
                    <ServicesP>Tire seu sonho do papel e obtenha uma aplicação personalizada.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Aplicativos</ServicesH2>
                    <ServicesP>Implementamos aplicativos para todos os sistemas operacionais. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <BtnWrap>
                <BudgetDialog/>
            </BtnWrap>
        </ServicesContainer>
    )
}

export default ServicesMain
