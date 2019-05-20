import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

class Image4 extends React.Component {
    item = []
    state = {
        arrPhoto: [],
        

    }

    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }

    componentDidMount = () => {
        this.getPhotos();
    }

    //   onSlideChange(e) {
    //     console.debug('Item`s position during a change: ', e.item)
    //     console.debug('Slide`s position during a change: ', e.slide)
    //   }

    //   onSlideChanged(e) {
    //     console.debug('Item`s position after changes: ', e.item)
    //     console.debug('Slide`s position after changes: ', e.slide)
    //   }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/modern')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));


    }
    slideTo = (i) => this.setState({ currentIndex: i });

    // onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });
    renderThumbs = () => {
        const item = this.state.arrPhoto.map(im => im.url);
        return (<ul>{item.map((item, i) =>
            <li key={i} onClick={() => this.slideTo(i)}><img style={{width:"200px", height:"100px"}} src={item} /></li>)}
        </ul>)
    }
    render() {
        const arr = this.state.arrPhoto;
        console.log(arr);
        // const arr3 = arr.map(i => <img src={i.url}/>);
        // console.log(arr3);
        const arr2 = arr.map(i => <div style={{ width: "100%" }}><img src={i.url} style={{ width: "100%", height: "600px" }} /></div>)

        return (
            <div>
                <AliceCarousel
                    items={arr2}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    playButtonEnabled={true}
                    disableAutoPlayOnAction={true}
                    onSlideChange={this.onSlideChange}
                    ref={(el) => (this.Carousel = el)}
                ></AliceCarousel>
                {this.renderThumbs()}
                <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
                <button onClick={() => this.Carousel._slideNext()}>Next button</button>
            </div>
        )
    }
}

export default Image4;