import { cookies } from "next/headers";
import Link from "next/link";

//1st way to make the page dynamic
// export const dynamic = 'force-dynamic'; //this forces the page to be rendered dynamically on each request
// export const dynamic = 'force-static'; 
// export const dynamic = 'error'; 
// export const dynamic = 'auto';  //default behavior


const Services = async ({searchParams}) => {
    //2nd way to make the page dynamic
    // const search = await searchParams; //destructuring searchParams from the props object
    // //this does the same thing as 'force-dynamic' above making the page dynamic
    // console.log('searchParams: ', search);

    //3rd way to make the page dynamic
    const myCookies = await cookies(); //using cookies() to make the page dynamic
    console.log('myCookies: ', myCookies);
    
    console.log('Running services component');
    
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="nav-link active">
                            Services
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>Our Services</h1>
                <ul className="services-list">
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Consulting Services</li>
                    <li>Digital Marketing</li>
                </ul>
            </div>
        </>
    );
};

export default Services;
