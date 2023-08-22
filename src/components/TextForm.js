import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpOnClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyOnClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard', 'success');
    }

    const handleClearOnClick = () => {
        setText('');
        props.showAlert('Text cleared', 'success');
    }

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="container">
                    <h1> {props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#41464b', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                    </div>
                    <div className="btn btn-primary mx-1" onClick={handleUpOnClick}>Convert to Uppercase</div>
                    <div className="btn btn-primary mx-1" onClick={handleCopyOnClick}>Copy to Clipboard</div>
                    <div className="btn btn-primary mx-1" onClick={handleClearOnClick}>Clear</div>
                </div>
                <div className="container my-3">
                    <h2>
                        Your text summary
                    </h2>
                    <p>
                        {text.split(" ").length} words and {text.length} chars
                    </p>
                </div>
            </div>
        </>
    )
}
