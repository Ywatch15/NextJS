"use client";
import Image from "next/image";

export default function Home() {
  return (
    <h1 onClick={() => {
      alert("You clicked me!");
    }}
    >Hello There!!!!</h1>
  );
}
