"use client";

export default function Button() {
    return (
        <button
            onClick={()=>{
                console.log("Clicked");
            }}
        >
            Click Me
        </button>
    );
}


