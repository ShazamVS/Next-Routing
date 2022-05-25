import Link from "next/link";

function ProductPage({ i = 1 }) {
  return (
    <>
      <h1>Product Page</h1>
      <p>
        You can add product id after the product or can add order and review
        with ids
      </p>
      <Link href="/product/glass" replace>
        <a>Navigate To Glass</a>
      </Link>
      <br />
      <Link href={`/product/${i}`} replace>
        <a>Navigate To {i}</a>
      </Link>
    </>
  );
}
export default ProductPage;
