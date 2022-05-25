import { useRouter } from "next/router";

function ProductDetailsPage() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Review Page for Product {productId}</h1>;
}
export default ProductDetailsPage;
