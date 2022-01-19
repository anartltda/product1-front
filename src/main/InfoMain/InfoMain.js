import React from 'react'
import { 
    InfoContainer, InfoWrapper, InfoRow, Column1, 
    Column2, TextWrapper, TopLine, Heading, Subtitle, 
    BtnWrap, ImgWrap, Image
} from './InfoElements'
import { Button } from '../ButtonElement'

const InfoMain = (prop) => {
    
    return (
        <>
            <InfoContainer lightBg={prop.lightBg} id={prop.id}>
                <InfoWrapper>
                    <InfoRow imgStart={prop.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{prop.topLine}</TopLine>
                                <Heading lightText={prop.lightText}>{prop.headline}</Heading>
                                <Subtitle darkText={prop.darkText}>{prop.description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                      to={prop.to}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact="true"
                                      offset={-80}
                                      primary={prop.primary ? 1 : 0}
                                      dark={prop.dark ? 1 : 0}
                                      dark2={prop.dark2 ? 1 : 0}
                                    >
                                        {prop.buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Image src={prop.img} alt={prop.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoMain
