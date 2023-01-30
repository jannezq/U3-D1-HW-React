import { Component } from "react";

class ImageComponent extends Component{

    render(){
        return <img className={this.props.placeholderArea} src={this.props.imageSource} alt={this.props.altContent} />
    }
}

export default ImageComponent