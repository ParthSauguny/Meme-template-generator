import React from "react";
import {useState} from "react";
import memedata from "./memedata";



export default function Meme() {
    //const [Memeimage , setMemeimage] = useState("https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png")

    const [topText , settopText] = useState("");
    const handletopInputChange = (event) => {
        settopText(event.target.value);
    };
    const [bottomText , setbottomText] = useState("");
    const handlebottomInputChange = (event) => {
        setbottomText(event.target.value);
    };

    const [meme , setMeme] = useState({
        Image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
    })
    let link;
    function memee() {
        const memearray = memedata.data.memes;
        const rand = Math.floor(Math.random() * memearray.length)
        link = memearray[rand].url;
        setMeme((prevMeme) => ({
            Image: link
        }));
    }

    return(
        <main>
            <div className="div">
                <input
                    value={meme.toptext}
                    placeholder="Top text"
                    onChange={handletopInputChange}
                    type="text" />
                <input 
                    value={meme.bottomtext}
                    placeholder="Bottom text"
                    onChange={handlebottomInputChange}
                    type="text" />
                <button 
                    className="div-button"
                    onClick={memee}>
                    Get a new meme image
                </button>
                
            </div>
            <div className="div2">
                <img className="meme--image" src={meme.Image} />
                <div className="uppertext">{topText}</div>
                <div className="bottomtext">{bottomText}</div>
            </div>
        </main>
    )
};