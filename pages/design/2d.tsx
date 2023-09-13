import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function TwoD() {
  return (
    <Navigation>
      <div className="flex-col mx-auto grid grid-cols-4 px-1 sm:px-0 sm:w-4/5 my-20">
        <div>
          <Image src="/design/2d/1.jpg" />
          <Image src="/design/2d/2.jpg" />
          <Image src="/design/2d/3.jpg" />
          <Image src="/design/2d/4.jpg" />
          <Image src="/design/2d/16.jpg" />
        </div>
        <div>
          <Image src="/design/2d/10.jpg" />
          <Image src="/design/2d/6.jpg" />
          <Image src="/design/2d/7.jpg" />
        </div>
        <div>
          <Image src="/design/2d/5.jpg" />
          <Image src="/design/2d/13.jpg" />
          <Image src="/design/2d/12.jpg" />
          <Image src="/design/2d/11.jpg" />
        </div>
        <div>
          <Image src="/design/2d/8.jpg" />
          <Image src="/design/2d/9.jpg" />
          <Image src="/design/2d/15.jpg" />
        </div>
      </div>
    </Navigation>
  );
}
