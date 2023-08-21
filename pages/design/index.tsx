import Navigation from "@components/Navigation";
import Link from "next/link";

function Design() {
  return (
    <div>
        <Navigation>
            <div className="mx-auto mt-20 ml-20 text-xl">
                <p><Link href="/design/2d">two dimensions</Link></p>
                <p><Link href="/design/sunshi">sunshi</Link></p>
                <p><Link href="/design/metal">metal</Link></p>
                <p><Link href="/design/aliens">aliens</Link></p>
            </div>
        </Navigation>
    </div>
  );
}

export default Design;
