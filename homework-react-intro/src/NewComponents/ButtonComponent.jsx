const ButtonComponent = (props) =>{

    const showAlert = () =>{

        alert("You pressed the button!")

    }

    return(
        <div>
            <h1>{props.h1content}</h1>
            <button onClick={showAlert} className="buttonArea">{props.labelContent}</button>
            <div className="textArea"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, 
                sunt nemo eum expedita placeat unde dolores possimus itaque repellat maxime architecto, 
                iusto a pariatur debitis? Obcaecati qui eveniet numquam. Eligendi.</p></div>
           
        </div>
    )
}

export default ButtonComponent