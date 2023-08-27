import Navigation from "@components/Navigation";
import BrutalistBuildings from "@components/blogPosts/brutalistBuildings";
import { useRouter } from "next/router";

function Design({ params }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navigation>
        <div className="mx-auto mt-20 px-10 sm:w-4/5 lg:w-3/5">
          {id === "brutalist-buildings-london" && (<BrutalistBuildings />)}
        </div>
      </Navigation>
    </div>
  );
}

export default Design;
