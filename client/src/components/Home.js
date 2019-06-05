import React from 'react';
import Slide7 from './pages/modules/Slide7';
import CardsModule from './pages/modules/CardsModule';
import Footer from './pages/modules/Footer';
import Contact from './pages/modules/Contact';
import About from './pages/modules/About';
import Nuka from './pages/modules/Nuka';

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <NavbarMain/> */}
                {/* <Slide7/> */}
                <Nuka/>
                <CardsModule/>
                <About/>
                <Contact/>
                {/* <Footer/> */}
                {/* <CardsModule /> */}
            </div>
        )
    }
}

export default Home;