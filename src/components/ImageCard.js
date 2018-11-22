import React, { Component } from 'react';

class ImageCard extends Component{
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render(){
        return(
            <div>
                <img
                    src={this.props.image.urls.regular} 
                    alt={this.props.image.description} 
                    ref={this.imageRef}
                />
            </div>
        );
    }
}
export default ImageCard;