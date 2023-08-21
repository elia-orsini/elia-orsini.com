import Navigation from "@components/Navigation";
import Link from "next/link";

function Design() {
  return (
    <div>
        <Navigation>
            <div className="mx-auto mt-20 ml-20 text-xl">
                <p><Link href="/blog/brutalist-buildings-london">brutalist buildings in london</Link></p>
            </div>
        </Navigation>
    </div>
  );
}

export default Design;
