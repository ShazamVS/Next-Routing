import { useRouter } from "next/router";

function ProductOrderPage() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Product Order Page {productId}</h1>;
}
export default ProductOrderPage;
