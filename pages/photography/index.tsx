import Navigation from "@components/Navigation";
import Link from "next/link";

function Photography() {
  return (
    <div>
        <Navigation>
            <div className="mx-auto mt-20 ml-20 text-xl">
                <p><Link href="/photography/cinematic">cinematic</Link></p>
                <p><Link href="/photography/nightlife">nightlife</Link></p>
                <p><Link href="/photography/portraits">portraits</Link></p>
            </div>
        </Navigation>
    </div>
  );
}

export default Photography;
