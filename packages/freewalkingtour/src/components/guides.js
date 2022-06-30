import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";

import Loading from './Loading';
import { MarginPaddingContainer, HeaderContainer, Title, Separator } from './home';

import guideOne from '../images/diego1.jpeg'
import guidTwo from '../images/frank.jpg'
import guideThree from '../images/isaias.jpeg'
import guideFour from '../images/bruce.jpeg'


const Guides = ({state, actions, libraries}) => {

    return(
      
                <MainContainer>
                        <HeaderContainer>
                            <Title>Meet Our Guides</Title>
                            <Separator></Separator>
                        </HeaderContainer>
                        <ContainerCard>
                            <GuideCard>

                                <ImageDescriptionContainer src={guideOne} />
                                <div>
                                    <h3>DIEGO ASTETE</h3>
                                    <p>
                                        Hello guys, my name is DIEGO. I was born in the magical city of cusco. I am Biologist and professional tour guide here in cusco city, with my tours you will learn important facts, such us: architecture, history, gastronomy, textile, gastronomy, local
                                        traditions and meanwhile, I will give you the best tips to have an amazing stay in the city. You will find me everyday at our meeting point: Plazoleta Espinar, in front of La Merced Church, and you can join me from Monday to
                                        Saturday, to experience one of the best walking tours in town, the tour will last about 2 hrs through the most important neighborhoods and the tour ends in one of the restobar with an amazing view of the city.
                                    </p>
                                    <span>Official Local Guide - Wild Free Walking Tours</span>
                                </div>
                            </GuideCard>

                            <GuideCard>
                                <ImageDescriptionContainer src={guidTwo} />
                                <div>
                                    <h3>FRANK CARRILLO</h3>
                                    <p>
                                        I’m local professional tour guide. I’m a passionate about my background, that’s why I studied tourism, I’ve been living all my life in Cusco. 
                                        I love history , archeology, music ,travelling and gastronomy. If you want to know the history of my hometown, 
                                        I’m willing to take you in a 2h - 2h30 Free walking tour , where you will have unforgettable journey.                                    
                                    </p>
                                    <small>Official Local Guide - Wild Free Walking Tours</small>
                                </div>
                       
                            </GuideCard>

                            <GuideCard>

                                <ImageDescriptionContainer src={guideThree} />
                                <div>
                                    <h3>ISAIAS VALDIVIA</h3>
                                    <p>
                                        Hi, my name is Isaias, I studied tourism in a local university in Cusco. I love history and culture of my city and even more I love sharing my knowledge 
                                        with all our visitors , in that way, you can have a unique experience and the opportunity to know the magnificent history of Cusco. 
                                        Working as a guide at Wild Free Walking Tour Cusco is a great experience, that allows me to explore the living history of this city.
                                    </p>
                                    <span>Official Local Guide - Wild Free Walking Tours</span>
                                </div>
                            </GuideCard>

                            <GuideCard>
                                <ImageDescriptionContainer src={guideFour} />
                                <div>
                                    <h3>BRUCE ORTEGA</h3>
                                    <p>
                                        My name is BRUCE. I’ve traveled through South America as a backpacker and sometimes as tour conductor for 5 years; 
                                        then I decided to settle down in cusco to rest of travelling, I started to studying the career called: Official Tour Guided, 
                                        and I love it, so I’ve decide to stay in Cusco. I graduated as a tour guide, I’m fun, charm, helpful, reliable, self confident, 
                                        shameless, open-minded, ecologist, minimalist, friendy ,philanthropist, well informed about national and international news. 
                                        I am into history, economy, politics, sociology, anthropology, spirituality ,literature and philosophy. 
                                        In my free walking tour I will share all my knowledge with you in a fluent English.                                   
                                    </p>
                                    <small>Official Local Guide - Wild Free Walking Tours</small>
                                </div>
                       
                            </GuideCard>
                        </ContainerCard>
                </MainContainer>
    )
}

// export const GuideCard = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-content: center;
// `

export default Guides;

/**Card DESCRIPTION */

export const MainContainer = styled.div`
    padding: 10% 0;
    margin: 0;
`

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;

`

export const GuideCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 2% 1%;
    /* padding: 2% 2%; */
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
    flex-basis: 45%;

    @media (max-width: 768px) {
        margin: 1rem;
        padding: 0;
    } 

    @media (max-width: 1275px) {
        flex-direction: column;
        flex-basis: 100%;
    }

    div {
        flex-basis: 80%;
        text-align: justify;
        margin: 2% 2%;

        @media (max-width: 1275px) {
            flex-basis: 100%;
        } 

        h3{
            font-size: 1.1rem;
            line-height: 1.5;

            @media (max-width: 768px) {
                font-size: 1.1rem;
            } 
        }

        p {
            font-size: .8rem;
            color: #000;
            line-height: 1.5;
        }

        span, small {
            color: #6c757d;
            font-size: .7rem;

        }
    }
	
`
export const ImageDescriptionContainer = styled(Image)`
    max-width: 17vw;
    max-height: auto;
    border-radius:.5rem 0 0 .5rem ;

    @media (max-width: 1275px) {
        max-width: 100%;
        border-radius:.5rem .5rem 0 ;

    }  
	
`