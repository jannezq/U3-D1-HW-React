const ButtonComponent = (props) =>{

    const showAlert = () =>{

        alert("You pressed the button!")

    }

    return(
        <div>
            <button onClick={showAlert} className="buttonArea">{props.labelContent}</button>
        </div>
    )
}

export default ButtonComponent