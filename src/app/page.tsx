import Link from "next/link";

export default function Home() {
  const reviewId = 11;
  return (
    <>
      <h1>Welcome to my Home !</h1>
      <Link href="/profile">Profile</Link>
      <br />
      <Link href="/about">About</Link>
      <br />

      <Link href="/products">Products</Link>
      <br />

      <Link href="/login">Login</Link>
      <br />

      <Link href="/register">Register</Link>
      <br />

      <Link href="/docs/...slug">Docs</Link>
      <br />

      <Link href="/...reviews">Reviews </Link>
    </>
  );
}
