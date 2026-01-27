//this is the demonstration of nested routing 

import Link from "next/link";

export default function WebDev() {
    return (
        <>
            <h1>Web Development Services</h1>
            <Link href="/services">Back to Services</Link>
        </>
    )
}