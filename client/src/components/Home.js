import React from 'react';
import Slide7 from './pages/modules/Slide7';
import CardsModule from './pages/modules/CardsModule';
import Footer from './pages/modules/Footer';
import NavbarMain from './Navbar-main/Navbar-main';
import About from './pages/modules/About';


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <NavbarMain/> */}
                <Slide7/>
                <About/>
                <CardsModule/>
                {/* <Footer/> */}
                {/* <CardsModule /> */}
            </div>
        )
    }
}

export default Home;