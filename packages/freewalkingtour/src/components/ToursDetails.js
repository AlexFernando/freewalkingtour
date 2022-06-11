import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";

import { IconContext } from "react-icons";
import { BsFillArrowDownCircleFill} from 'react-icons/bs'; 
import {MarginPaddingContainer} from './home'

const TourDetails = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);
    
    const idTour = data.id;

    const postTour = state.source.alltours[idTour];

    const Html2react = libraries.html2react.Component;
    
    return (

        <MarginPaddingContainer>
            <div>
                <h1>{postTour.acf.title}</h1>
                <span>By Wild Free Walking Tours</span>
            </div>
            <div>
                <p>{postTour.acf.language}</p>
                <p>{postTour.acf.duration}</p>
            </div>
      
            <Content>
                <Html2react html={postTour.content.rendered} />
            </Content>

        </MarginPaddingContainer>
    )
}


const Content = styled.div`
    display: flex;
    justify-content: space-between;
    color: #000;
    margin-top: 2rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    @media(max-width: 1200px) {
        flex-direction: column;
        align-content: center;
    }

    .wp-container-1 {

        text-align: justify;

        h2 {
            font-size: 1.5rem;
            border-top: 1px solid rgb(204, 204, 204);
            padding-top: 1rem;
            padding-right: calc(1.5rem/2);
            margin-right: calc(1.5rem/2);
        }

        h4 {
            margin-left: 1rem;
        }
    }

    .wp-block-contact-form-7-contact-form-selector {
        flex-basis: 100%;
        padding-left: calc(1.5rem/2);
        margin-left: calc(1.5rem/2);
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
            box-shadow: 0 2px 5px 1px grey;
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
    }
`;



export default connect(TourDetails);

