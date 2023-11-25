import Header from "@components/Header";
import Image from "@components/Image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`sunshi | elia orsini`} />

      <Navigation>
        <div className="flex-col mx-auto w-4/5 my-20 justify-between">
          <div className="flex-col mx-auto gap-y-20 grid mt-10">
            <div>
              <h2>Olive Hatake - 1975</h2>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/BbcvxFVh0wQ?si=FQoMUUfVVhX5kZI9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h2>OliveyOlive - growing pains</h2>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/TizlMnP-K7g?si=utLB8ThdEojEIJsY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h2>Olive Hatake - random memories</h2>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/ySzzK6iUXHQ?si=J8t5KdAralv7g9C6"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
}
