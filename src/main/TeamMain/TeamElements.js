import styled from 'styled-components'

export const TeamContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    
    @media screen and (max-width: 1024px) {
        height: 1000px;
    }

    @media screen and (max-width: 992px) {
        height: 1600px;
    }

    @media screen and (max-width: 768px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`

export const TeamWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 1024px) {
        /* margin: 20px; */
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const TeamCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
    
    @media screen and (max-width: 992px) {
        max-height: 250px;
        font-size: 2rem;
    }
`

export const TeamIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`

export const TeamH1 = styled.h1`
    height: 2.5rem;
    color: #010606;
    margin-bottom: 64px;
    /* margin-top: 200px; */
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const TeamH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const TeamP = styled.p`
    font-size: 1rem;
    text-align: center;
`