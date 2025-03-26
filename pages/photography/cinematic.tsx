import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function Cinematic() {
  return (
    <Navigation>
      <div className="flex-col mx-auto grid sm:grid-cols-3 w-4/5 my-20">
        <div className="flex flex-col justify-between">
          <Image alt=""
            src="/photography/cinematic/1.jpg"
            thumb="/photography/cinematic_blur/1.jpg"
          />
          <Image alt=""
            src="/photography/cinematic/2.jpg"
            thumb="/photography/cinematic_blur/2.jpg"
          />
          <Image alt=""
            src="/photography/cinematic/3.jpg"
            thumb="/photography/cinematic_blur/3.jpg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <Image alt=""
            src="/photography/cinematic/4.jpg"
            thumb="/photography/cinematic_blur/4.jpg"
          />
          <Image alt=""
            src="/photography/cinematic/5.jpg"
            thumb="/photography/cinematic_blur/5.jpg"
          />
          <Image alt=""
            src="/photography/cinematic/6.jpg"
            thumb="/photography/cinematic_blur/6.jpg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <Image alt=""
            src="/photography/cinematic/7.jpg"
            thumb="/photography/cinematic_blur/7.jpg"
          />
          <Image alt=""
            src="/photography/cinematic/8.jpg"
            thumb="/photography/cinematic_blur/8.jpg"
          />
          <Image alt=""
            src="/photography/cinematic/9.jpg"
            thumb="/photography/cinematic_blur/9.jpg"
          />
        </div>
      </div>
    </Navigation>
  );
}
