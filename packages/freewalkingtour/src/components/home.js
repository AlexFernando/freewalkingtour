import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';

import Loading from './Loading';

//icons
import { IconContext } from "react-icons";
import { BsFillArrowDownCircleFill} from 'react-icons/bs';
import ReadMore from '../helpers/ReadMore';
import LinkMoreInfo from './LinkMoreInfo'

//images 
// import smallBg from '../images/background_image_scaled-768x471.webp';
// import mediumBg from '../images/background_image_scaled-1536x941.webp';
// import bigBg from '../images/background_image_scaled.webp'
// import smallTshirt from '../images/shirt-300x273.webp';
// import normalSizeTshirt from '../images/shirt.webp';

const Home = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/category/hometour/");
        actions.source.fetch("/category/freetourhome/");
        actions.source.fetch("/homepage/");
    }, []);
    
    const data = state.source.get("/category/hometour/");
    const dataFreeTour = state.source.get("/category/freetourhome/");

    const pageHomeData = state.source.page[10];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>     
                {typeof pageHomeData === "undefined" ? <Loading /> :     
                <>
                    <ContainerBackground>

                        <picture>
                            <source media="(max-width: 767px)" srcSet="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-768x471.jpg" />
                            <source media="(max-width: 1599px)" srcSet="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-1536x941.jpg" />
                            <source media="(max-width: 2048px)" srcSet="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled.jpg" />

                            <ImageTag
                                src="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/background_image_scaled-768x471.jpg" alt="background cover" width="1800" height="1103"
                            />
                        </picture>

                        
                        {/* <picture>
                            <source media="(max-width: 767px)" srcSet={smallBg} />
                            <source media="(max-width: 1599px)" srcSet={mediumBg} />
                            <source media="(max-width: 2048px)" srcSet={bigBg} />

                            <ImageTag
                                src={smallBg} alt="background cover" width="1800" height="1103"
                            />
                        </picture> */}

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
                                    <source media="(max-width: 799px)" srcSet="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/shirt-300x273.png" />
                                    <source media="(min-width: 800px)" srcSet="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/shirt.png"/>
                                    <ImageShirt src="https://walkingtours2024.wildfreewalkingtours.com/wp-content/uploads/2022/05/shirt.png" alt="orange_t-shirt" />
                                </picture>

                                {/* <picture>
                                    <source media="(max-width: 799px)" srcSet={smallTshirt} />
                                    <source media="(min-width: 800px)" srcSet={normalSizeTshirt}/>
                                    <ImageShirt src={normalSizeTshirt} alt="orange_t-shirt" />
                                </picture> */}
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

                                {
                                    dataFreeTour.isCategory && data.isReady ? 

                                        dataFreeTour.items.map( ({type, id}) => {

                                            const singleTour = state.source[type][id];
                                                
                                            return (
                                                <Link href={singleTour.link}>
                                                    <FreeTourCard>
                                                        
                                                            <ContainerImage>
                                                                <picture>
                                                                    <source media="(max-width: 799px)" srcSet={singleTour.acf.image_card.sizes.medium} />
                                                                    <source media="(min-width: 800px)" srcSet={singleTour.acf.image_card.sizes.medium_large} />
                                                                    <ImageTourStyled src={singleTour.acf.image_card.sizes.medium} alt="hometour" />
                                                                </picture>
                                                            </ContainerImage>
            
                                                            <InfoHomeTour>
                                                                <span>{singleTour.acf.price}</span>
                                                                <h3>{singleTour.acf.title}</h3>
                                                                <ul>
                                                                    <li>First Turn: 10:00 am</li>
                                                                    <li>Second Turn: 12:30 pm</li>
                                                                    <li>Third Turn: 03:00 pm</li>
                                                                </ul> 

                                                                <LastInfo>
                                                                    <p>English, Spanish</p>
                                                                    <LinkMoreInfo href={singleTour.link}>+ Info</LinkMoreInfo>
                                                                </LastInfo>
                                                            </InfoHomeTour>
                                                    
                                                    </FreeTourCard>
                                                </Link>
                                            )
                                        })
                                
                                    :null
                                          
                                }

                                <DonationBase>

                                    <h3>Donation Base</h3>
                                    <p>
                                        It's completely free to book, once the tour is done, 
                                        you can leave your generous and personal donation, 
                                        that will help us to continue with our work.
                                    </p>
                                </DonationBase>

                                <TripAdvisorCard> 
                                    <div>
                                        <p><a href="https://www.tripadvisor.com/Attraction_Review-g294314-d12493345-Reviews-Wild_Free_Walking_Tour_Cusco-Cusco_Cusco_Region.html">Check Our Reviews</a></p>   
                                    </div>                                     
                                    
                                    <ImageReviewBox alt="tripadvisor_reviews" width={Math.floor(pageHomeData.acf.images_group.tripadvisor_reviews.sizes["medium-width"]/2)} height={Math.floor(pageHomeData.acf.images_group.tripadvisor_reviews.sizes["medium-height"]/2)} src={pageHomeData.acf.images_group.tripadvisor_reviews.sizes.medium}/>
                                </TripAdvisorCard>
                            </CardAndTripAdvisor>
                        </FreeTourContainer>

                        <Content>
                            
                            <Html2react html={pageHomeData.content.rendered} />
                        </Content>
                        
                        <WriteReviewBox>
                            <LeftSideBox>
                                <span>
                                    <ImageReviewBox alt="tripadvisor_reviews" width={Math.floor(pageHomeData.acf.images_group.tripadvisor_reviews.sizes["medium-width"]/2)} height={Math.floor(pageHomeData.acf.images_group.tripadvisor_reviews.sizes["medium-height"]/2)} src={pageHomeData.acf.images_group.tripadvisor_reviews.sizes.medium}/>
                                    <p>Rating</p>
                                </span>

                                <MyStars>
                                    <h3>5.0</h3>
                                    <span>
                                        ★★★★★
                                    </span>
                                </MyStars>
 
                            </LeftSideBox>
                            <ButtonWriteReview href="https://www.tripadvisor.com.pe/UserReviewEdit-g294314-d12493345-Wild_Free_Walking_Tour_Cusco-Cusco_Cusco_Region.html" target="_blank">Write a Review</ButtonWriteReview>
                        </WriteReviewBox>

                        <TripAdvisorReviews>
                            {
                                Object.keys(pageHomeData.acf.testimonials).map( item => {

                                    return(
                                        <ReviewItem>
                                            <h4>{pageHomeData.acf.testimonials[item].client_name}</h4>
                                            <div>
                                            <span>★★★★★</span>
                                            <span>{pageHomeData.acf.testimonials[item].days_ago}</span>
                                            </div>

                                            <h3>{pageHomeData.acf.testimonials[item].title}</h3>
                                            <ReadMore content= {pageHomeData.acf.testimonials[item].comment_description} limit={60} />

                                        </ReviewItem>
                                    )
                                   
                                })

                            }
                            
                        </TripAdvisorReviews>
                        
                        <ContainerToursHome>
                            <h2>Tours Mas Populares</h2>
                      
                            <ToursHomeWrap>
                            {
                                data.isCategory && data.isReady ?

                                    data.items.map( ({type, id}) => {

                                        const singleTour = state.source[type][id];
                                            
                                        return (
                                            <TourHomeItem>
                                                <Link href={singleTour.link}>
                                            
                                                    <picture>
                                                        <source media="(max-width: 799px)" srcSet={singleTour.acf.image_card.sizes.medium} />
                                                        <source media="(min-width: 800px)" srcSet={singleTour.acf.image_card.sizes.medium_large} />
                                                        <ImageTourCard src={singleTour.acf.image_card.sizes.medium} alt="hometour" />
                                                    </picture>

                                                    <InfoHomeTour>
                                                        <span>{singleTour.acf.price}</span>
                                                        <h3>{singleTour.acf.title}</h3>
                                                        <LastInfo>
                                                            <p>English, Spanish</p>
                                                            <LinkMoreInfo href={singleTour.link}>+ Info</LinkMoreInfo>
                                                        </LastInfo>    
                                                    </InfoHomeTour>
                                                </Link>
                                            </TourHomeItem>
                                        )
                                    })
                                
                                :null
                            }
                            </ToursHomeWrap>
                        </ContainerToursHome>


                    <WarrantyImageGroup>
                        {
                            Object.keys(pageHomeData.acf.images_group).map(elem => {
                                return (
                                    <ImageStyleWarranty width={Math.floor((pageHomeData.acf.images_group[elem].sizes["medium-width"])/1.5)} height={Math.floor((pageHomeData.acf.images_group[elem].sizes["medium-height"])/1.5)} src={pageHomeData.acf.images_group[elem].sizes.medium} alt={pageHomeData.acf.images_group[elem].title}/>
                                )
                            })
                        }
                         
                   
                     </WarrantyImageGroup>
                    
                    </MarginPaddingContainer>                    

              
                    </> 
                }
            
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
     
        height: 276px;
    }

    img {
        width: 100vw;
    height: 100vh;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    object-fit: cover;

    @media (max-width: 767px){
       
        width: auto;
        height: 276px;
    }
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

    @media (max-width: 767px){
       
        width: auto;
        height: 276px;
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
    padding:calc(1.5rem/2); ;
    border: 1px solid gray;
    border-radius: 5px;

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

    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);  
`
const CardAndTripAdvisor = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 2%;

    @media (max-width: 950px) {
        flex-direction: column;

    } 
`
const FreeTourCard = styled.div`
    display: flex;
    justify-content: first baseline;
    margin: 0% 2% 0 0;
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
    flex-basis: 40%;

    @media (max-width: 568px) {
        margin: 1rem;
        padding: 0;
        flex-direction: column;
    }
`
const DonationBase = styled.div`
    flex-basis: 30%;
    /* box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem; */
    align-self: baseline;
    text-align: center;

        h3 {
            padding: 1rem 1rem 0 1rem;

        }
        p {
            padding: 0rem 1rem 1rem 1rem;
            line-height: 1.5;
            font-size: .8rem;
        }
    
    @media (max-width: 950px) {
        margin-top: 1rem;
    } 
`

/**Styles meeting point content rendered */
const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    padding-bottom: 4rem;

    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
        padding-right: 1rem;
        padding-left: 1rem;
    } 

    .wp-block-group {
        flex-basis: 40%;

        @media (max-width: 768px) {
            flex-basis: 100%;
            width: 100%;
        } 
    }

`

/**Finish styles meeting point */

const TripAdvisorCard = styled.div`
    text-align: center;
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    p {
        margin: 0;
     
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
        color: #474747;
        
    }

    img {
        object-fit: contain;
        text-align: center;
    }

    @media (max-width: 950px) {
        margin-top: 1rem;
        flex-basis: 100%;
    } 
`

const WriteReviewBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: rgba(17, 17, 17, 0.05);

    @media (max-width: 768px) {
        flex-direction: column;
    } 
`

const LeftSideBox = styled.div`
    span {
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 1.2rem;
    }
`

const MyStars = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    h3 {
        margin: 0 auto;
        padding: 0 auto;
        font-size: 1.2rem;
    }

    span {
        margin: 0 auto;
        padding: 0 auto;
        font-size: 1.2rem;
        color: rgb(252, 191, 2) !important;
    }
`
const ImageReviewBox = styled(Image)`
    object-fit: contain;
`
const ButtonWriteReview = styled.a`
    text-decoration: none;
    background-color: rgb(25, 123, 255);
    color: rgb(255, 255, 255);
    align-self: center;
    border: 4px solid rgba(0, 0, 0, 0);
    padding: .5rem;
    border-radius: 2px;
    font-size: 1rem;
    cursor: pointer;
`
const TripAdvisorReviews = styled.div`
    display: flex;

    @media (max-width: 768px) {
        padding: 1rem;
        flex-direction: column;
    } 
`

const ReviewItem = styled.div`
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: rgba(17, 17, 17, 0.05);
    flex-basis: 25%;

    h3 {
        font-size: 1rem;
        color: #333333;
        margin-bottom: 0;
        line-height: 1.5;
        margin-top: .5rem;
    }

    h4 {
        font-size: .9rem;
        color: #333333;
        margin-bottom: 0;
    }

    span {
    
        :nth-of-type(1){
            font-size: 1.2rem;
            color: rgb(252, 191, 2) !important
        }

        :nth-of-type(2) {
            font-size: .8rem;
            color: #333333;
            margin-left: 1rem;
        }
    }
    p {
        margin: 0;
        font-size: .9rem;
        line-height: 1.5;
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
            //color:#3A6F84;
            color: #333333;
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

const ContainerToursHome = styled.div`
        margin: 4rem 0;
`

export const ToursHomeWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;


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
        font-size: 1.8vh;

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

    li {
        color: #484848;
        text-transform: capitalize;

        font-size: 2vh;

            @media (max-width: 768px) {
                font-size: 2vh;
            } 
    }

`

export const LastInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
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

    @media (max-width: 767px) {
        flex-direction: column;
    } 
`

const ImageStyleWarranty = styled(Image)`
    align-self: center;
    object-fit: contain;

`
