import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function TwoD() {
  return (
    <Navigation>
      <div className="flex-col mx-auto w-4/5 my-20">
        <div className="flex-col mx-auto grid md:grid-cols-3 mt-5 gap-2">
          <div className="flex flex-col space-y-2">
            <Image src="/design/metal/3.jpg" />
            <Image src="/design/metal/4.jpg" />
            <Image src="/design/metal/5.jpg" />
            <Image src="/design/metal/6.jpg" />
            <Image src="/design/metal/26.jpg" />
            <Image src="/design/metal/30.jpg" />
            <Image src="/design/metal/13.jpg" />
          </div>
          <div className="flex flex-col space-y-2">
            <Image src="/design/metal/9.jpg" />
            <Image src="/design/metal/10.jpg" />
            <Image src="/design/metal/11.jpg" />
            <Image src="/design/metal/8.jpg" />
            <Image src="/design/metal/28.jpg" />
            <Image src="/design/metal/13.jpg" />
            <Image src="/design/metal/14.jpg" />
          </div>
          <div className="flex flex-col space-y-2">
            <Image src="/design/metal/12.jpg" />
            <Image src="/design/metal/15.jpg" />
            <Image src="/design/metal/17.jpg" />
            <Image src="/design/metal/25.jpg" />
            <Image src="/design/metal/29.jpg" />
            <Image src="/design/metal/20.jpg" />
            <Image src="/design/metal/16.jpg" />
          </div>
        </div>
      </div>
    </Navigation>
  );
}
