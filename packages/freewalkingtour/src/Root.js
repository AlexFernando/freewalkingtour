import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import Header from './components/header/header'
import Home from './components/home';
import Footer from './components/footer';
import Tours from './components/tours';
import Guides from './components/guides';
import Faqs from './components/faqs';
import GeneralContact from './components/GeneralContact';
import TourDetails from './components/ToursDetails';


import Script from "@frontity/components/script";

const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link);


    useEffect( () => {
        actions.source.fetch("/homepage")
    }, [])

    
    return (
      <>
      <Global
                styles={css`

                    :root {
                        --brand: #0c884a; //#5B3BE8;
                        
                        --black: #000000;
                        --white: #ffffff;
                        --bodycolor: #343434;
                    }
                    body {
                        margin: 0;
                        font-family: 'Montserrat', sans-serif;
                        overflow-x: hidden;
                        width: 100%;
                        /*height: 100%;*/
                    }

                
                    /* * {
                        border: 1px solid #f00 !important;
                    }     */
                     
                    p {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 400;
                    }
                `}
            />

            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'"/> 
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <title>Free Walking Tours | Book the best Free Walking tour in Cusco</title>
                <meta name="description" content="Book your spot on top-quality free tours and budget activities with local guides. Friendly, knowledgeable and three unique local walking tours in Cusco" />
                <html lang="en" />
            </Head>

            <Header />

            {data.isHomePage && <Home /> }
            {state.router.link === "/tours/" && <Tours />}
            {(data.isAlltours || data.isHomeTours)  && <TourDetails />}
            {data.isGuides && <Guides />}
            {state.router.link === "/faqs/" && <Faqs />}
            {state.router.link === "/contact/" && <GeneralContact />}
            <Footer title= "Wild Free Walking Tours" />    
      </>
    );
  };

  export default connect(Root);