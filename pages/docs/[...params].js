import { useRouter } from "next/router";

function DocPage() {
  const router = useRouter();
  const { params } = router.query;
  console.log("Params", params);
  return <h1>Doc Details Page</h1>;
}
export default DocPage;
