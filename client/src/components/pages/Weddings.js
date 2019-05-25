import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Images from './modules/Images';
import './categories.css';
import axios from "axios";
import { FacebookShareButton, FacebookIcon, FacebookShareCount } from 'react-share';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class Weddings extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            arrPhoto: [],
            //   name: this.props.user.email
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    // Fetch the list on first mount
    componentDidMount() {
        this.getPhotos();
        this.setState({ name: this.props.user.email });
    }

    getPhotos = () => {
        fetch('/api/get_photos/weddings')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        console.log(this.state.list);
    }

    handleClick = (url) => {
        const fav = url;
        this.setState({ modalUrl: url });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        const photosUrl = this.state.arrPhoto.map(
            (images) =><Images
                email={this.state.name}
                key={images.public_id}
                id={images.public_id}
                url={images.url}
                handleClick={this.handleClick} />

        )
        return (
            <div>
                <div>
                    <br />
                    <div className="jumbotron-fluid text-center">
                        <i className="header-cat" style={{ fontSize: "30px" }}>Weddings</i>
                    </div>
                    <hr/>
                    <div className="container container-img">
                        <div className="row row-img">
                            <div className="photo-container" onClick={this.openModal}>{photosUrl}</div>

                        </div>
                    </div>
                </div>
                {/* <div className="img-btn" onClick={this.openModal}>Open Modal</div> */}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <button className="close-btn-modal" onClick={this.closeModal}>close</button>
                    <div className="modal-img-div"><img className="modal-img" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: "700px", maxWidth: "1000px" }} src={this.state.modalUrl} /></div>
                </Modal>
            </div>
        );
    }
}

export default Weddings;