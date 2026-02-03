import Link from "next/link";

export async function generateStaticParams() {
    // this is an example of fetching data from an external API to generate static params
    // a typical SSG example in which the static pages are being generated
    // despite having the dynamic route parameter [blogID]
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
    return data.map(({ id }) => ({ blogID: `${id}` }));
    // return [
    //   { blogID: "1" },
    //   { blogID: "2" },
    //   { blogID: "3" },
    //   { blogID: "4" },
    //   { blogID: "5" },

    // ];
}

const Blog = async ({ params }) => {
    //these two below lines of code will run only when there would be a call for the blogs/[blogID] page where blogID > 200
    //and anything would be printed in the terminal where the next dev server is running
    const { blogID } = await params;
    console.log("blogID: ", blogID);
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
                        <Link href="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="nav-link active">
                            Blogs
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>Welcome to Our Blog {blogID}</h1>
                <p>This is blog {blogID} page.</p>
            </div>
        </>
    );
};

export default Blog;