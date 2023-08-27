import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function Code() {
    return (
        <Navigation>
            <p className={`text-lime ${koulen.className}`}>test</p>
        </Navigation>
    )
}