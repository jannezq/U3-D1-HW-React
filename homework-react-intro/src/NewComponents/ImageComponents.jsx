import { Component } from "react";

class ImageComponent extends Component{

     showAlert = () =>{

        alert("You pressed the button!")

    }

    render(){
        return <img className={this.props.placeholderArea} src={this.props.imageSource} alt={this.props.altContent} onClick={this.showAlert}/>
    }
}

export default ImageComponent