import React, {useState} from 'react'

export default function TextArea() {

    const [text, setText] = useState("");

    const userValue = (e) => {
        setText(e.target.value);
    }

    const convertToUpperCase = () =>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const convertToLowerCase = () =>{
        let newText=text.toLowerCase();
        setText(newText);    
    }

    const changeToReverse= () =>{
        let newString = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newString += text[i];
        }
        setText(newString);
    }

    const copyClipboard = () =>{
        let text=document.getElementById('textArea');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    // To remove extra space in beyween words
    const removeExtraSpace = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    //To clear text
    const clearTeaxt = () =>{
        setText('');
    }
    //To remove space while counting char
    function char(){
        let newChar=text.split(/\s+/);
        return newChar.join("").length;
    }   

  return (
    <div className='container'>
        <div className="mb-3">
            <h1>Enter Text Here</h1>
            <textarea className="form-control" rows="6" id="textArea" value={text} onChange={userValue} placeholder='Enter some text to unblock the buttons'></textarea>
        </div>

        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={convertToUpperCase}>Convert To UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={convertToLowerCase}>Convert To LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={changeToReverse}>Reverse your TextValue</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={removeExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={copyClipboard}>Copy To Clipboard</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={clearTeaxt}>Clear TextArea</button>

        <div className='container'>
            <h2 className="my-3">Words is in the Text Area and Total char Present</h2>
            <p>Total words present in the Text area : {text.split(/\s+/).filter((element)=>(element.length!==0)).length}
                <br/>
                and 
                <br/>
                Total char present in the Text area : {char()}
                <br/>
                <br/>
                You can read below preview para in {(0.008 * text.split(" ").filter((element)=>(element.length!==0)).length).toFixed(2)} / minutes
            </p>
        </div>
        <div className='container'>
            <h3>Preview</h3>
            <p>{text.length===0?"Nothing in preview":text}</p> 
        </div>
    </div>
    
  )
}
