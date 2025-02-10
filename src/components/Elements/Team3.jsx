import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/our-team4/pic1.png'),
        membername: 'Hassan Damoush',
        position: 'Directeur Général',
        call:'(+225)078999969',
        email:'hdaamoush@triadci.com'
    },
    {
        image: require('./../../images/our-team4/pic2.png'),
        membername: 'Fabrice Kokra',
        position: 'Comptable et Finance',
         call:'(+225)0707207719',
        email:'fabricekokra@triadci.com'
    },
    {
        image: require('./../../images/our-team4/pic3.png'),
        membername: 'Ayoub Fayad',
        position: 'Directeur Commercial',
         call:'(+225)0758373333',
        email:'afayad@triadci.com'
    },
    {
        image: require('./../../images/our-team4/pic3.png'),
        membername: 'Amine Fakih',
        position: 'Chef de projet',
         call:'(+225)0758202741',
        email:'fakihamines@gmail.com'
    },
    {
        image: require('./../../images/our-team4/pic3.png'),
        membername: 'Valerie Ouedraodo',
        position: 'Chargé de vente',
         call:'(+225)0747499860',
        email:'valeriereusite@gmail.com'
    }
]

class Team3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Notre </span> équipe</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE Team START */}
                        <div className="section-content">
                            <div className="row">
                                {teamMembers.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                        <div className="our-team-1 hover-animation-1">
                                            <div className="profile-image scale-in-center"><img src={item.image} alt="" /></div>
                                            <div className="figcaption">
                                                <h4 style={{color:"#75BF44"}}>{item.membername}</h4>
                                                <h5>{item.position}</h5>
                                                {/* <p>Which is worse, that everyone has his price, or that the price is always so low.</p> */}
                                                <div className="icons" >
 
 
                                                 <a href={`tel:${item.call}`} className="fa fa-phone" style={{ marginRight: '10px' }}/>
                                                <a href={`mailto:${item.email}`} className="fa fa-envelope" />
                                                    {/* <NavLink to={"#"} ><i className="fa fa-facebook" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-twitter" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-instagram" /></NavLink>
                                                    <NavLink to={"#"} ><i className="fa fa-rss" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-youtube" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-linkedin" /></NavLink> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team3;