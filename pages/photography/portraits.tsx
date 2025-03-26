import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function Portraits() {
  return (
    <Navigation>
      <div className="flex-col mx-auto grid sm:grid-cols-3 w-4/5 my-20">
        <div className="flex flex-col justify-between">
          <Image alt="" src="/photography/portraits/1.jpg" />
          <Image alt="" src="/photography/portraits/2.jpg" />
          <Image alt="" src="/photography/portraits/3.jpg" />
          <Image alt="" src="/photography/portraits/4.jpg" />
        </div>
        <div className="flex flex-col justify-between">
          <Image alt="" src="/photography/portraits/13.jpg" />
          <Image alt="" src="/photography/portraits/6.jpg" />
          <Image alt="" src="/photography/portraits/7.jpg" />
          <Image alt="" src="/photography/portraits/5.jpg" />
        </div>
        <div className="flex flex-col justify-between">
          <Image alt="" src="/photography/portraits/9.jpg" />
          <Image alt="" src="/photography/portraits/10.jpg" />
          <Image alt="" src="/photography/portraits/11.jpg" />
          <Image alt="" src="/photography/portraits/12.jpg" />
        </div>
      </div>
    </Navigation>
  );
}
