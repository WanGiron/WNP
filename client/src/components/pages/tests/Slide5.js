import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

class Image5 extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          arrPhoto: [],
          
        };
      }

    // responsive = {
    //     0: { items: 1 },
    //     1024: { items: 1 },
    // }

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

    onSlideChanged = (e) => {
    // let item = this.state.arrPhoto.map(im => im.url);
    this.setState({ currentIndex: e.item });
    }
    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    renderThumbs = () => {
        const item = this.state.arrPhoto.map(im => im.url);
        return (<div>
            <ul>{item.map((item1, i) =>
                <li key={i} onClick={() => this.slideTo(i)}> <img style={{ width: "200px", height: "100px" }} src={item1} /></li>)}
            </ul>
        </div>)
    }
    renderGallery(){
        const { currentIndex, item } = this.state;
        const arr = this.state.arrPhoto;
        const items = arr.map(im => im.url);
        const arr2 = arr.map(i => <div style={{ width: "100%" }}><img src={i.url} style={{ width: "100%", height: "600px" }} /></div>)

        return (<AliceCarousel
              items={arr2}
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
        >
            { items.map((item, i) => <div key={i} className="yours-custom-class"><img src={item} /></div>) }

        </AliceCarousel>);
    }
    render() {
        const arr = this.state.arrPhoto;
        console.log(arr);
        // const arr2 = arr.map(i => <div style={{ width: "100%" }}><img src={i.url} style={{ width: "100%", height: "600px" }} /></div>)
        return (
            <div>
                {this.renderGallery()}
                {this.renderThumbs()}
                <button onClick={() => this.slidePrev()}>Prev button</button>
                <button onClick={() => this.slideNext()}>Next button</button>
                
            </div>
        )
    }
}

export default Image5;