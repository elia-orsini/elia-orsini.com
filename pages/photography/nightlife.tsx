import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function Nightlife() {
  return (
    <Navigation>
      <div className="flex-col mx-auto grid sm:grid-cols-3 w-4/5 my-20">
        <div className="flex flex-col justify-between">
          <Image src="/photography/nightlife/1.jpg" />
          <Image src="/photography/nightlife/2.jpg" />
          <Image src="/photography/nightlife/3.jpg" />
        </div>
        <div className="flex flex-col justify-between">
          <Image src="/photography/nightlife/4.jpg" />
          <Image src="/photography/nightlife/5.jpg" />
          <Image src="/photography/nightlife/6.jpg" />
        </div>
        <div className="flex flex-col justify-between">
          <Image src="/photography/nightlife/7.jpg" />
          <Image src="/photography/nightlife/8.jpg" />
          <Image src="/photography/nightlife/9.jpg" />
        </div>
      </div>
    </Navigation>
  );
}
