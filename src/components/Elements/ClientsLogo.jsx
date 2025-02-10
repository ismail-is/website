import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/allclients/1 (4).jpg') },
    { image: require('./../../images/allclients/11 (7).jpg') },
    { image: require('./../../images/client-logo/w2.png') },
    { image: require('./../../images/client-logo/w3.png') },
    { image: require('./../../images/client-logo/w4.png') },
    { image: require('./../../images/client-logo/w5.png') },
    { image: require('./../../images/client-logo/w6.png') },
    
]

class ClientsLogo extends React.Component {
    render() {
        const options = {
            loop:true,
            margin:0,
            autoplay:true,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:2
                },
                480:{
                    items:3
                },			
                767:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        };
        return (
            <>
                <div className="section-full p-t10 bg-white ">
                    <div className="container">
                        <div className="section-content">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nous sommes fiers </span>  de travailler avec</h2>
                                </div>
                            </div>
                        </div>
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <div className="section-content p-tb10 owl-btn-vertical-center">
                                    <OwlCarousel className="owl-carousel home-client-carousel-2" {...options}>
                                        {logos.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="ow-client-logo">
                                                    <div className="client-logo client-logo-media">
                                                    <NavLink to={"#"} ><img src={item.image} alt=""/></NavLink></div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo;