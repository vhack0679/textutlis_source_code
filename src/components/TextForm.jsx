import React,  {useState} from "react";

export default function TextForm(props){
    const handelOnchange=() =>{
        //console.log("on changed")
        setText(event.target.value)

    }
    const handelclrclick=() =>{
        let newtext='';
        setText(newtext)
        props.showAlert("text cleard" ,"success")
  
    }
    const handleCopyClick = () => {
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard:', text);
        props.showAlert("text copied" ,"success")
  
      });
    }
  }
    const handelresclick=()=>{
            const cleanedText = text.replace(/\s+/g, ' ').trim();
    setText(cleanedText)
    props.showAlert("Extra space removed" ,"success")
  
    }
   const capitalizeFirstLetterOfEachWord = () => {
    if (text.length > 0) {
      const words = text.split(" ");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      const newtext = capitalizedWords.join(" ");
      setText(newtext);
    props.showAlert("text converted to 1st letters  captial" ,"success")
  
    }
  }
    const handelupclick=() =>{
       // console.log("button clicked" + text)
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("text converted to uppercase" ,"success");
    }
    const handelloclick=() =>{
       // console.log("button clicked" + text)
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("text converted to lowercase" ,"success")
  
    }
 const[text,setText]=useState("");
    return(
        <>
        <div className="container">
   <div className="mb-3"><h1>{props.heading}</h1>
   <textarea className="form-control" id="exampleformcontroltexthere1" value={text} onChange={handelOnchange} rows="8" height="250px"></textarea>
   </div>
   <button className="btn btn-primary mx-2 my-3" onClick={handelupclick}>Convert to uppercase</button>
   <button className="btn btn-primary mx-2 my-3" onClick={handelloclick}>Convert to lowercase</button>
   <button className="btn btn-primary mx-2 my-3" onClick={handelclrclick}>clear</button>
   <button className="btn btn-primary mx-2 my-3" onClick={handelresclick}>remove extra spaces</button>
   <button className="btn btn-primary mx-2 my-3" onClick={handleCopyClick}>copy text </button>
     <button
          className="btn btn-primary mx-2 my-3"
          onClick={capitalizeFirstLetterOfEachWord}
        >
          Capitalize every first letter
        </button>
   </div> 
   <div className="container">
   <h1>YOUR TEXT SUMMERY
</h1>
   <p> {text.split(".").filter((element)=>{return element.length!=0}).length}  sentances {text.split(/\S+/).filter((element)=>{return element.length!=0}).length} words and {text.length} charaters</p>
   <h5>In How many Min.sec You Can Read</h5>
   <p>{0.008 * text.split(" ").length} Min.sec</p>
   <h5>PREVIEW</h5>
   <p>{text.length>0?text:"Enter Text  To See Preview"}</p>
   </div>
   </>
);
}
