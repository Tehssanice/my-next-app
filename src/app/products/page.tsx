import Link from "next/link";

export default function ProductList() {
  const productsId = 100;
  return (
    <>
      <h2>ProductList</h2>
      <Link href={"/"}>Home</Link>

      <ul>
        <li>
          <Link href="/products/1">
            <b>Product 1</b>
          </Link>
        </li>
        <li>
          <Link href="/products/2">
            <b>Product 2</b>
          </Link>
        </li>
        <li>
          <Link href="/products/3" replace>
            <b>Product 3</b>
          </Link>
        </li>

        <li>
          <Link href={`products/${productsId}`}>
            <b>Product {productsId}</b>
          </Link>
        </li>
      </ul>
    </>
  );
}
