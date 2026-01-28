//this is the demonstration of nested routing 

import Link from "next/link";

export default function SEO() {
    return (
        <>
            <h1>SEO Services</h1>
            <Link href="/services">Back to Services</Link>
        </>
    )
}