// import React from 'react'

import Link from "next/link";


export async function generateMetadata({params}){
    const {blogID} = await params;
    return {
        title: `Blog ${blogID}`,
    }
}

export default async function Blog1({ params }) {
    console.log(await params);
    const {blogID} = await params; // here the {blogID} is known as the slug
    return(
        <>
        <div>Blog {blogID}</div>
        <Link href="/blogs">Back to Blogs</Link>
        </>
    )
}



// the structure of the folder must follow the same convention as done in this 
/*this way we can create dynamic routing in nextjs
app ->
    blogs ->
        [blogID] ->
            page.js
 */