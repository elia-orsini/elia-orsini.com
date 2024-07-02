import Navigation from "@components/Navigation";
import AlwaysEndingTunnel from "@components/blog/alwaysEndingTunnel";
import BrutalistBuildings from "@components/blog/brutalistBuildings";
import Exhale from "@components/blog/ehxale";
import { useRouter } from "next/router";

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navigation>
        <div className="mx-auto mt-20 px-2 sm:w-4/5 lg:w-3/5">
          {id === "brutalist-buildings-london" && <BrutalistBuildings />}
          {id === "exhale" && <Exhale />}
          {id === "always-ending-tunnel" && <AlwaysEndingTunnel />}
        </div>
      </Navigation>
    </div>
  );
}

export default BlogPost;
