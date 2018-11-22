import React, { Component } from 'react';

class ImageCard extends Component{
    constructor(props){
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({spans: spans});
    }

    render(){
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
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