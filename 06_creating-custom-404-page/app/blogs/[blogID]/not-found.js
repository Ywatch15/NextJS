"use client"

export default async function BlogNotFound({params}) {
    console.log(params);
    
    return (
    <>
        <h1>Page not found</h1>
        <p>Could not find the requested page.</p>
    </>
    );
}