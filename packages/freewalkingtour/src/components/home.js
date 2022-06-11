import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';

import Loading from './Loading';

//icons
import { IconContext } from "react-icons";
import { BsFillArrowDownCircleFill} from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';
import {BiMoney} from 'react-icons/bi';

import Script from "@frontity/components/script";

import dircetur from "../../src/images/dircetur_1.png"
import greenTourism from "../../src/images/green_tourism_1.png"
import marcaPeru from "../../src/images/maeca_peru_1.png"
import promperu from "../../src/images/promeperu.png"
import trip from "../../src/images/trip.png"

// const MyComponent = () => (
//     <Script src="https://apps.elfsight.com/p/platform.js" defer />
// );




const Home = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/hometours")
    }, [])

    const data = state.source.get('/hometours');
    


    return ( 
        <>           
        
                <>      
                           
                    <ContainerBackground>

                        <picture>
                            <source media="(max-width: 767px)" srcSet="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-768x471.jpg" />
                            <source media="(max-width: 1599px)" srcSet="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-1536x941.jpg" />
                            <source media="(max-width: 2048px)" srcSet="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg" />

                            <ImageTag
                                src="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg" alt="background cover"
                            />
                        </picture>

                        
                        <TextContainer>
                            <h1>  WILD FREE WALKING TOURS CUSCO - <span>Guided by Locals</span> </h1>
                        </TextContainer>
                       
                    </ContainerBackground>
          
                    <MarginPaddingContainer>
                        <HeaderContainer>
                            <Title>ABOUT US</Title>
                            <Separator></Separator>
                        </HeaderContainer>
                

                        <AboutContainer>
                            <div>
                                <h2>Look for our Orange T-shirt and logo</h2>

                                <IconContext.Provider value={{ color: "#FF4500", className: "global-class-name", size: "2rem" } }>
                                    <BsFillArrowDownCircleFill />
                                </IconContext.Provider> 
                                <div>

                                <picture>
                                    <source media="(max-width: 799px)" srcSet="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/shirt-300x273.png" />
                                    <source media="(min-width: 800px)" srcSet="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/shirt.png"/>
                                    <ImageShirt src="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/shirt.png" alt="orange_t-shirt" />
                                </picture>
                                </div>
                                <h2>Don't get confused by others groups</h2>
                            </div>
                            <MainParagraph>
                                <h2>The best free walking tour in Cusco</h2>
                                <p>Join us to our Free Walking Tour and made your stay worth it. Our guides will give you some value information about different aspects of the andean cosmovision and Inca Culture.</p>
                                <h2>Let's Walk!</h2>
                                <p>
                                    Wild free walking tour Cusco is operated by a 100% local company, we have been working in Cusco for 3 years now, and We are recognize as one of the best Free Walking Tours in Cusco. 
                                    We will explore by foot this magnificent city, the capital of the great Inka Empire, called in our Quechua mater language, as QOSQO. (Navel of the world, Center of the Universe).
                                    In our free walking tour, which is a 2-hour and 30-minute walk, our authorized and passionate about history local guides, will illustrate to you about all theories around Inka Culture and the influence in the andean cosmovision of today. 
                                    We want to be the best historical walking tour in town for you.
                                </p>

                                <p>
                                    IMPORTANT : Don't waste your time with pseudo-guides. Make sure to get trained guides with fluent English. 
                                    Any doubts? Check our excellent and real comments of our walkers.</p>
                            </MainParagraph>
                        </AboutContainer>


                        

                        <FreeTourContainer>

                            <h2>Join to the best Free Walking Tour in Cusco</h2>
                            
                            <CardAndTripAdvisor>

                                <FreeTourCard>
                                    <ContainerImage>
                                        <ImageTourStyled src={trip} />
                                    </ContainerImage>

                                    <InfoFreeTour>
                                        <h3>Free Walking Tour in Cusco</h3>

                                        <div>
                                            <span>
                                                <IconContext.Provider value={{ color: "#FF4500", className: "global-class-name", size: "1rem" } }>
                                                    <AiFillClockCircle />   2 - 2.5h 
                                                </IconContext.Provider>
                                            </span>

                                            <span>
                                                <IconContext.Provider value={{ color: "#FF4500", className: "global-class-name", size: "1rem" } }>
                                                    <BiMoney /> Free
                                                </IconContext.Provider>
                                            </span>
                                        </div>  

                                        <p>Our Walking Tours are historical and cultural focused, our licensed guides are prepared to give you important information and facts about our ancestral city ...</p>
                                        
                                    </InfoFreeTour>

                                </FreeTourCard>

                             
                            </CardAndTripAdvisor>
                        </FreeTourContainer>
                        
                        
                        <ToursHomeWrap>
                        {
                            data.isReady ?

                                data.items.map( ({id}) => {

                                    const singleTour = state.source.hometours[id];
                                        
                                    return (
                                        <TourHomeItem>
                                            <Link href={singleTour.link}>
                                          
                                                <picture>
                                                    <source media="(max-width: 799px)" srcSet={singleTour.acf.image.sizes.medium} />
                                                    <source media="(min-width: 800px)" srcSet={singleTour.acf.image.sizes.medium_large} />
                                                    <ImageTourCard src={singleTour.acf.image.sizes.medium} alt="hometour" />
                                                </picture>

                                                <InfoHomeTour>
                                                    <span>{singleTour.acf.price}</span>
                                                    <h3>{singleTour.acf.title}</h3>
                                                    <p>English, Spanish</p>      
                                                </InfoHomeTour>
                                            </Link>
                                        </TourHomeItem>
                                    )
                                })
                            
                            :null
                        }
                        </ToursHomeWrap>


                    <WarrantyImageGroup>
                         
                         <ImageStyleWarranty src={dircetur} />
                         <ImageStyleWarranty src={greenTourism} />
                         <ImageStyleWarranty src={marcaPeru} />
                         <ImageStyleWarranty src={promperu} />
                         <ImageStyleWarranty src={trip} />
                   
                     </WarrantyImageGroup>
                    
                    </MarginPaddingContainer>                    

              
                    
                    {/* <MyComponent /> 
                    <div className="elfsight-app-7ac3bacd-320d-4e47-b93a-1b49d7f53dc7"></div>      */}

                
                   


                   
                </>
            
        </>
     );
}


 
export default connect(Home);


export const ContainerBackground = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100vh;
    margin-top: 2rem;

    @media (max-width: 768px){
        height: 50vh;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-start;
    width: 100vw;
    color: #fff;



    h1{
        /* background-image: linear-gradient(to top, rgba(255,140,0, .8), rgba(255,140,0, .9)); */
        background-color: #00000075;
        padding: 2%;
        width: 100vw;

        @media (max-width: 768px){
            font-size: 1rem;
        }
    }
`

export const ImageTag = styled(Image)`
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    object-fit: cover;

    @media (max-width: 768px){
            object-fit: fill;
            height: 50vh;
        }
`
  
/**ABOUT SECTION */

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-transform: uppercase;
        font-size: 1.5rem;
        padding: 1rem 5rem;

        @media(max-width: 768px) {
            font-size: 1.2rem;
            padding: 1rem;
        }
    }
`
export const Title = styled.h2`

    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    margin: 1.5rem 15%;
    text-transform: capitalize;
    text-align: center;
 
    @media(min-width: 768px) {
        font-size: 2.5rem;
    }

    @media(max-width: 768px) {
        font-size: 1.9rem;
        text-align: center;
        margin: 1rem 15%;
    }
`

export const Separator = styled.span`
    display: block;
    width: 8%;
    height: 8px;
    margin-top: 0;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: var(--brand);
    align-self:center;


    @media(max-width: 768px) {
        width: 4rem;
        height: 5px;
        margin-top: 0;
    }
`
export const MarginPaddingContainer = styled.div`
    max-width: 77.5rem;
    margin: 5% auto;
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 2rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    h2 {
        font-size: 1.2rem;
    }

    div {
        text-align: center;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
export const MainParagraph = styled.div`
    text-align: center;
    flex-basis: 80%;
    color: #3c3c3c;
    line-height: 1.5;


    p {
        font-size: 1rem;
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 1rem;
        } 
    }
`

export const ImageShirt = styled(Image)`
    width: 100%;
    height: 100%;
`
/**END ABOUT STYLES */

const FreeTourContainer = styled.div`
    h2 {
        text-align: center;
    }

    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);  
`
const CardAndTripAdvisor = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;

    @media (max-width: 950px) {
        flex-direction: column;
    } 
`
const FreeTourCard = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2% 2% 0 0;
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
    flex-basis: 100%;

    @media (max-width: 568px) {
        margin: 1rem;
        padding: 0;
        flex-direction: column;
    }
`
const TripAdvisorCard = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
  
    @media (max-width: 950px) {
        flex-direction: column;
        margin-left: 2rem;
    } 
`

export const InfoFreeTour = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.2rem;
    line-height: 1.5;
    align-items: stretch;
    flex-basis: 60%;
    text-align: justify;

    h3 {
        color: #3A6F84;
    }

    p {
        color: #3A6F84;
        text-transform: capitalize;
    }

    div {
        display: flex;
        justify-content: flex-start;

        span {
            color:#3A6F84;
            font-weight: bold;
            margin-right:1rem;
        }
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }

        span {
            font-size: .8rem;
        }
    } 

    @media (max-width: 568px) {
        flex-basis: 100%;
    } 

    @media (max-width: 900px) {
        flex-basis: 50%;
    } 

    @media (max-width: 700px) {
        flex-basis: 40%;
    } 
`
export const ContainerImage = styled.div`
    flex-basis: 30%;

    @media (max-width: 950px) {
        flex-basis: 40%;
    } 
    @media (max-width: 700px) {
        flex-basis: 50%;
    } 
`

export const ImageTourStyled = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius:.5rem 0 0 .5rem ;

    @media (max-width: 1275px) {
        border-radius:.5rem .5rem 0 0;
    }
`


/**HOME TOURS STYLES */

export const ToursHomeWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;
    margin: 4rem 0;

    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (min-width: 576px) and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`;

export const TourHomeItem = styled.div`
    margin: 2rem 0;
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
`;

export const InfoHomeTour = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    span {
        color:gray;
        font-weight: bold;
        margin: 0;
        font-size: 1.5vh;

        @media (max-width: 768px) {
            font-size: 2vh;
        } 
    }

    h3{
        color: #484848;
        margin: .5rem 0;
        font-size: 2vh;

        @media (max-width: 768px) {
            font-size: 2.5vh;
        } 
    }

    p {
        color: var(--brand);
        font-weight: bold;
        margin: 0;
        font-size: 1.5vh;

        @media (max-width: 768px) {
            font-size: 2vh;
        } 
    }
`

export const ImageTourCard = styled(Image)`
    width: 100%;
    height: 25vh;
    border-radius:.5rem .5rem 0 0;

    @media (max-width: 767px) {
        width: 100%;
        height: 30vh;
    } 
`
/**END HOME TOURS STYLES */


const WarrantyImageGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
`

const ImageStyleWarranty = styled(Image)`
    width: 140px;
    height: 120px;
`
