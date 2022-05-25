import { useRouter } from "next/router";

function DocPage() {
  const router = useRouter();
  return (
    <>
      <h1>Doc Page</h1>
      <p>You can add multiple parameters after docs</p>;
    </>
  );
}
export default DocPage;
