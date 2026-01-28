import Link from "next/link";

export const metadata={
    title:"Blog",
}

export default async function Blogs({searchParams, params}) {
    const randomRef = Math.random()*1000;
    // console.log(await searchParams);
    // console.log(await params);
    
    
    return (
    <>
        <h1>Blogs Page</h1>
        <ul>
            <li> Blog1</li>
            <li> Blog2</li>
            <li> Blog3</li> 
        </ul>
        <Link href="/">Back to Home</Link> <br />
        <Link href={`/blogs/${randomRef}`}>randomRef</Link>
    </>
    );
}