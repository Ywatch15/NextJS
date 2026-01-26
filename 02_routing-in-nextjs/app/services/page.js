import Link from "next/link";

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