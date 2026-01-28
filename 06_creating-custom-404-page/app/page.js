import Link from "next/link";

export const metadata={
  title:"Technical Agency",
  description:"Hello",
};

export default function Home() {
  return (
    <>
      <h1>This is a technical agency</h1>
      <p>
        <Link href="/blogs" >Blogs</Link>
      </p> {" "}
      <p>
        <Link href="/about" >About</Link>
      </p> {" "}
      <p>
        <Link href="/services" >Services</Link>
      </p>
      <p>
        <Link href="/files" >Files</Link>
      </p>
    </>
  );
}
