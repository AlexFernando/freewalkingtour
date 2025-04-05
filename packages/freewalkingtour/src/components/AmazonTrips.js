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
import {ContainerBackgroundTour, BackgroundColor, MainContainerTours, ToursContainer, ToursWrap, TourItem, InfoTour, ImageTourStyled, Content, ContainerImage} from './tours'
import LinkMoreInfo from './LinkMoreInfo';

const MPTours = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/amazontours")
    }, [])

    const data = state.source.get('/amazontours');

    let tours = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singleTour = state.source.amazontours[id];
            tours.push(singleTour);
        })
    }

    const pageAmazon = state.source.page[320];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>
        {data.isReady ?
        <>           
        {typeof pageAmazon === "undefined" ? <Loading /> : 
        <>
            <ContainerBackgroundTour>

                <ImageTag
                    src="https://walkingtours.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg"
                    srcSet="https://walkingtours.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-768x471.jpg 750w,
                            https://walkingtours.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg 2048w"
                    width="2048"
                    height="1536"
                    alt="landscape"
                />

                <TextContainer>
                    <h1>  Amazon Trips - <span>Guided by Locals</span> </h1>
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

                                            <LinkMoreInfo href={tour.link}>+ Info</LinkMoreInfo>
                                            
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
                        <Html2react html={pageAmazon.content.rendered} />
                    </Content>
                  
    
                </ToursContainer>
         
            </MainContainerTours>


        </>
        }
        </>

        : <Loading />}
        </>
     );
}

export default connect(MPTours);