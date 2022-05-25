import { useRouter } from "next/router";

function ProductDetailsPage() {
  const router = useRouter();
  const { productId, id } = router.query;
  return (
    <h1>
      Product Review Detail Page {productId} with Id {id}
    </h1>
  );
}
export default ProductDetailsPage;
