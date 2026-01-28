import Link from "next/link";

export const metadata={
    title:"Services",
}

//this is to create the nested routes
export default function Services() {
    return (
        <>
            <h1>All Services</h1>
            
            <Link href="/services/app-dev" >App Development</Link><br/> {" "}
            <Link href="/services/web-dev" >Web Development</Link><br/> {" "}
            <Link href="/services/app-web-design" >App/Web Design</Link><br/> {" "}
            <Link href="/services/seo" >SEO</Link>
        </>
    )
}