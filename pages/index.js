import Link from "next/link";
import { useRouter } from "next/router";

function MainPage() {
  const router = useRouter();
  const clickHandler = () => {
    console.log("Your Order Has Been Placed");
    router.push("/product");
    //router.replace("/product") --> used as <Link href="" replace/>
  };
  return (
    <>
      <h1>Main Page</h1>
      <h2>Navigate to different pages</h2>
      <Link href="/blog" replace>
        <a>Blogs</a>
      </Link>
      <br />
      <Link href="/docs">
        <a>Docs</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <br />
      <button onClick={clickHandler}>Place Order</button>
    </>
  );
}
export default MainPage;
