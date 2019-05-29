import React from 'react';
import Slide7 from './pages/modules/Slide7';
import CardsModule from './pages/modules/CardsModule';
import Footer from './pages/modules/Footer';
import Contact from './pages/modules/Contact';
import About from './pages/modules/About';


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <NavbarMain/> */}
                <Slide7/>
                <About/>
                <CardsModule/>
                <Contact/>
                {/* <Footer/> */}
                {/* <CardsModule /> */}
            </div>
        )
    }
}

export default Home;