import React from 'react'
import { 
    TeamContainer, TeamH1, TeamWrapper, 
    TeamCard, TeamIcon, TeamH2, TeamP
} from 'main/TeamMain/TeamElements'
import Team from '../../assets/img/team/image.png'

const ServicesMain = () => {
    return (
        <TeamContainer id='team'>
            <TeamH1>Nossa Equipe</TeamH1>
            <TeamWrapper>
                <TeamCard>
                    <TeamIcon src={Team}/>
                    <TeamH2>Team</TeamH2>
                    <TeamP>Team</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Team}/>
                    <TeamH2>Team</TeamH2>
                    <TeamP>Team</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Team}/>
                    <TeamH2>Team</TeamH2>
                    <TeamP>Team</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Team}/>
                    <TeamH2>Team</TeamH2>
                    <TeamP>Team</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Team}/>
                    <TeamH2>Team</TeamH2>
                    <TeamP>Team</TeamP>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default ServicesMain
