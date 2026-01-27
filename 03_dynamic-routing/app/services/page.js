import Link from "next/link";

export default function Services() {
    return (
        <>
            <h1>All Services</h1>
            //this is to create the nested routes
            <Link href="/services/app-dev" >App Development</Link><br/> {" "}
            <Link href="/services/web-dev" >Web Development</Link><br/> {" "}
            <Link href="/services/app-web-design" >App/Web Design</Link><br/> {" "}
            <Link href="/services/seo" >SEO</Link>
        </>
    )
}