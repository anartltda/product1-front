import React from 'react'
import { 
    TeamContainer, TeamH1, TeamWrapper, 
    TeamCard, TeamIcon, TeamH2, TeamP
} from 'main/TeamMain/TeamElements'
import Adriel from '../../assets/img/team/drico.jpg'
import Tinin from '../../assets/img/team/tin.jpg'
import Antonio from '../../assets/img/team/antonio.jpeg'
import Nat from '../../assets/img/team/nat.jpg'
import Rod from '../../assets/img/team/rod.jpg'

const ServicesMain = () => {
    return (
        <TeamContainer id='team'>
            <TeamH1>Nossa Equipe</TeamH1>
            <TeamWrapper>
                <TeamCard>
                    <TeamIcon src={Adriel}/>
                    <TeamH2>Adriel</TeamH2>
                    <TeamP>Take it slow o que, carai?</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Tinin}/>
                    <TeamH2>C. Tinin</TeamH2>
                    <TeamP>Quem tem um mamão tem tudo.</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Antonio}/>
                    <TeamH2>Marcos</TeamH2>
                    <TeamP>Stream &apos; Put it on repeat &apos; da Sabrina.</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Nat}/>
                    <TeamH2>Natália</TeamH2>
                    <TeamP>A maioral, primeira de seu nome.</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Rod}/>
                    <TeamH2>Rodrigo</TeamH2>
                    <TeamP>O casal 21!</TeamP>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default ServicesMain