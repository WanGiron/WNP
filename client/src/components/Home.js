import React from 'react';
import Slide7 from './pages/modules/Slide7';
import CardsModule from './pages/modules/CardsModule';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Slide7/>
                <CardsModule />
            </div>
        )
    }
}

export default Home;