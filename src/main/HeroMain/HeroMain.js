import React, {useState} from 'react'
import Video from '../../assets/videos/greenPlanet.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroMain = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> anart </HeroH1>
                <HeroP> Soluções Tecnológicas e Sistema de Agendamento </HeroP>
                <HeroBtnWrapper>
                    <Button 
                      to='services'
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      dark2={1}
                    >
                        Saiba mais {hover? <ArrowFoward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroMain
