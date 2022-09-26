import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUpClick = () => {
        console.log("UpperCase was Clicked" * text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleUpClicked = () => {
        console.log("UpperCase was Clicked" * text);
        let newTexts = text.toLowerCase();
        setText(newTexts)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary' onClick={handleUpClicked}>Convert to Lowercase</button>
        </div>
        </>
    )
}

export default TextForm;