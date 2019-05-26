import React from 'react';
import AbourImg from './about.jpg';
import './about.css';

class About extends React.Component {
    render() {
        return (
        <div className="about-main-div">
        <h2 className="header-about">About me</h2>
            <div className="about-wraper">
                <div className="img-about-div"
                    style={{
                        backgroundImage: `url(${AbourImg})`,
                        backgroundSize: "cover",
                        height: "200px",
                        width: "250px",
                        margin: "5px"
                    }}>
                </div>

                <div className="p-about-div">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                           eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                         sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                         sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>
             </div>

        </div>

        )
    }
}

export default About;