import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function TwoD() {
  return (
    <Navigation>
      <div className="flex-col mx-auto grid grid-cols-3 px-1 sm:px-0 sm:w-4/5 my-20">
        <div className="flex flex-col">
          <Image src="/design/2d/1.jpg" />
          <Image src="/design/2d/2.jpg" />
          <Image src="/design/2d/3.jpg" />
          <Image src="/design/2d/4.jpg" />
          <Image src="/design/2d/8.jpg" />
        </div>
        <div className="flex flex-col">
          <Image src="/design/2d/10.jpg" />
          <Image src="/design/2d/6.jpg" />
          <Image src="/design/2d/7.jpg" />
          <Image src="/design/2d/9.jpg" />
        </div>
        <div className="flex flex-col">
          <Image src="/design/2d/5.jpg" />
          <Image src="/design/2d/13.jpg" />
          <Image src="/design/2d/12.jpg" />
          <Image src="/design/2d/11.jpg" />
        </div>
      </div>
    </Navigation>
  );
}
