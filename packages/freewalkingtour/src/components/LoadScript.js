import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Script from "@frontity/components/script";
import Image from "@frontity/components/image";

export const MyTripAdvisorScript = () => {

    return(
    <>          
    <div  id="TA_selfserveprop784" className="TA_selfserveprop">
            <ul id="6nnnBN" className="TA_links s34mseFEVkfp">
                <li id="Ce8V1Q5Nxs6" className="b4h0pQgouG">
                    <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html">
                        <Image src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/>
                        <div id="TA_selfserveprop784" className="TA_selfserveprop">
                            <ul id="6nnnBN" className="TA_links s34mseFEVkfp">
                                <li id="Ce8V1Q5Nxs6" className="b4h0pQgouG">
                                <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html">
                                    <Image src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/>
                                </a>
                                </li>
                                </ul>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

<Script src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=784&amp;locationId=14803688&amp;lang=en_US&amp;rating=true&amp;nreviews=5&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true" defer async />
        </>        
    )

};