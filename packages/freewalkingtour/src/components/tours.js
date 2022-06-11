import React, {useState, useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import LinkButtonHomeSecond from './LinkButtonHomeSecond';
import Image from "@frontity/components/image";
import {ContainerBackground, ImageTag, TextContainer} from './home';

//icons
import { IconContext } from "react-icons";
import { AiFillClockCircle } from 'react-icons/ai';
import {BiMoney} from 'react-icons/bi';

import Loading from './Loading';
import Link from './Link';

const Tours = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/alltours")
    }, [])

    const data = state.source.get('/alltours');

    let tours = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singleTour = state.source.alltours[id];
            tours.push(singleTour);
        })
    }

    const pageAllTours = state.source.page[78];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>           
        {typeof pageAllTours === "undefined" ? <Loading /> : 
        <>
            <ContainerBackgroundTour>

                <ImageTag
                    src="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg"
                    srcSet="https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-768x471.jpg 750w,
                            https://freewalking.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg 2048w"
                    width="2048"
                    height="1536"
                    alt="landscape"
                />

                <TextContainer>
                    <h1>  Free Walking Tour in Cusco - <span>Guided by Locals</span> </h1>

                </TextContainer>

            </ContainerBackgroundTour>


            <MainContainerTours>

                <h2>The best tours in Cusco</h2>

                <ToursContainer>
                {
                    data.isReady && tours.length > 0? 

                    <ToursWrap>
                        {
                            tours.reverse().map( tour => {
                                return (
                                    <Link href={tour.link}>

                                    <TourItem>
                                        <ContainerImage>
                                            <ImageTourStyled src={tour.acf.image_card.sizes.medium_large} />
                                        </ContainerImage>

                                        <InfoTour>
                                            <h3>{tour.acf.title}</h3>

                                            <div>
                                                <span>
                                                    <IconContext.Provider value={{ color: "#FF4500", className: "global-class-name", size: "1rem" } }>
                                                        <AiFillClockCircle />   {tour.acf.duration} 
                                                    </IconContext.Provider>
                                                </span>
       
                                                <span>
                                                    <IconContext.Provider value={{ color: "#FF4500", className: "global-class-name", size: "1rem" } }>
                                                        <BiMoney />    {tour.acf.price}
                                                    </IconContext.Provider>
                                                </span>
                                            </div>  

                                            <p>{tour.acf.description}</p>
                                            
                                        </InfoTour>

                                    </TourItem>
                                   
                                    </Link>
                                  
                                )
                            })
                        }
                    </ToursWrap>

                    :null
                }



                    <Content>
                        {/* <MyTripAdvisorScript />
                        <div id="TA_selfserveprop784" className="TA_selfserveprop">
                            <ul id="6nnnBN" className="TA_links s34mseFEVkfp">
                                <li id="Ce8V1Q5Nxs6" className="b4h0pQgouG">
                                    <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html">
                                        <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/>
                                        <div id="TA_selfserveprop784" className="TA_selfserveprop">
                                            <ul id="6nnnBN" className="TA_links s34mseFEVkfp">
                                                <li id="Ce8V1Q5Nxs6" className="b4h0pQgouG">
                                                <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html">
                                                    <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/>
                                                </a>
                                                </li>
                                                </ul>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                        <Html2react html={pageAllTours.content.rendered} />
                    </Content>
                  
    
                </ToursContainer>
         
            </MainContainerTours>


        </>
        }
        </>
     );
}

export const ContainerBackgroundTour = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    max-width: 100%;
    height: 500px;

    @media (max-width: 768px){
        height: 300px;
    }
`

export const BackgroundColor = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    height: 350px;
    align-items: center;
    padding-left: 10rem;
    margin-top: 5%;
   
    @media(max-width: 768px) {
        height: 300px;
        flex-direction: column;
    }

    h3 {
        text-transform: capitalize;
        font-size: 2rem;
        margin-bottom: 0;
        color: #fff;
        text-align: center;
        text-shadow: 1px 1px 2px black;

        @media(min-width: 768px) {
            font-size: 2.5rem;
        }
    }
`;


/**tours */
export const MainContainerTours = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;


    h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }
`

export const ToursContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;

    @media (max-width: 1275px) {
        flex-direction: column;
    }
`

export const ToursWrap = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #444;
    margin: 2rem 0;
    flex-basis: 75%;
    flex-wrap: wrap;

    @media (max-width: 1275px) {
        flex-basis: 100%;
    }
  
`;

export const TourItem = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2% 1%;
    /* padding: 2% 2%; */
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
    flex-basis: 100%;

    @media (max-width: 568px) {
        margin: 1rem;
        padding: 0;
        flex-direction: column;
    } 
`;

export const InfoTour = styled.div`
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
export const ViewMoreWrapper = styled.div`
    align-self: center;
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

export const Content = styled.div`

    margin: 2rem 0;

    @media (min-width: 1275px) {
        flex-basis: 20%;
    }

    h2 {
        color: #044E8E;
    }

    h3 {
        color: #617B05;
        margin-bottom: 3rem;
    }

    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;


    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0rem;
    }

    .wp-block-group {

        @media(max-width: 768px) {
            width: 100%;
            height: 100%;            
        }
    }

    .wpcf7  {
        border-radius: .4rem;
        box-shadow: 0 15px 30px 1px grey;
	    background: rgba(255, 255, 255, 0.90);
        padding: 1rem 3rem 1rem 2rem;
        margin: 1rem 0rem;


        @media(max-width: 768px) {
            iframe {
                width: 100%;
                height: 100%;
            }
        }

        h3 {
            margin-bottom: 4rem;
        }
    }

    label {
        font-size: 1rem;
    }

    input, textarea, select {
        height: 100%;
        padding:10px;
        margin:10px 0; 
        border: 1px solid rgba(97, 97, 97, 0.7);
        
        //box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
        border-radius:5px;
        width:100%;
        font-family:inherit;
        font-size: 1rem;
    }

    @media(max-width: 768px) {
        input, textarea {
            width: 100%;
        }
    }

    textarea {
        height: 150px;
    }

    input[type="submit"] { 
        width: auto;
        background-color: #f4623a;
        height: 48px;  
        padding: 1.5rem;
        text-transform: none;
        border: 1px solid #fff;
        font-weight: 500;
        font-size: 1rem;
        text-transform: capitalize;
        color: #FFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        padding: 2px 24px;
        position: relative;

        @media(max-width: 768px) {
            width: 100%;
            
        }
    
        &:hover {
            background-color: #ee3e0d;
            transition: all 0.4s;
        }
    }

    a {
        text-decoration: none;
        color: #ff8562;
    }
`;


export default connect(Tours);