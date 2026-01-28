//this is the demonstration of nested routing 

import Link from "next/link";

export default function AppDev() {
    return (
        <>
            <h1>App Development Services</h1>
            <Link href="/services">Back to Services</Link>
        </>
    )
}