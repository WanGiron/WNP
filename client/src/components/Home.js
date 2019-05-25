import React from 'react';
import Slide7 from './pages/modules/Slide7';
import CardsModule from './pages/modules/CardsModule';
import Footer from './pages/modules/Footer';
import NavbarMain from './Navbar-main/Navbar-main';


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <NavbarMain/> */}
                <Slide7/>
                {/* <Footer/> */}
                {/* <CardsModule /> */}
            </div>
        )
    }
}

export default Home;