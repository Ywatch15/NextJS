"use client";

import {useState} from "react";

export default function Likes(){
    const [likeCount, setLikeCount] = useState(0);
    // await new Promise((resolve)=> setTimeout(resolve, 6000));
    // console.log(window);
    // if(typeof localStorage !== "undefined"){
    //     console.log(localStorage);
    // }

    console.log("Like Component");
    return (
        <div
            onClick={()=>{
                setLikeCount((prev)=> prev+1);
            }} >
                {likeCount} likes
            </div>
    );
}



/*
1) By default all components are Server Components
2) Server Components are rendered only on the Server
3) Client Components are rendered both on the Server & then on the Client as well
4) Client Components are declared with "use client" directive
5) If a Parent Component is declared as Client Component with "use client" directive, then all its child components are treated as the Client Components. But we should be very careful with this setup. We should make sure that we create a separate Component for the JSX which was interactive (like a button with a ClickEvent handler), then declare that component as Client Component and import the same in the Parent Component.

Pro Tips: 
Client Components should not be async. 
Hooks do not work in our server components
*/