import Navigation from "@components/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";

function Design({ params }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navigation>
        <div className="mx-auto mt-20 ml-20 text-xl">
          <p>{id}</p>
        </div>
      </Navigation>
    </div>
  );
}

export default Design;
