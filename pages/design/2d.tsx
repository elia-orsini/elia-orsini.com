import Header from "@components/Header";
import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function TwoD() {
  return (
    <>
      <Header title={`2D design | elia orsini`} />

      <Navigation>
        <div className="flex-col mx-auto grid grid-cols-4 px-1 sm:px-0 sm:w-4/5 my-20 gap-1">
          <div>
            <Image src="/design/2d/1.jpg" />
            <Image src="/design/2d/2.jpg" />
            <Image src="/design/2d/3.jpg" />
            <Image src="/design/2d/4.jpg" />
            <Image src="/design/2d/26.jpg" />
            <Image src="/design/2d/29.jpg" />
            <Image src="/design/2d/16.jpg" />
            <Image src="/design/2d/21.jpg" />
          </div>
          <div>
            <Image src="/design/2d/10.jpg" />
            <Image src="/design/2d/6.jpg" />
            <Image src="/design/2d/7.jpg" />
            <Image src="/design/2d/18.jpg" />
            <Image src="/design/2d/20.jpg" />
            <Image src="/design/2d/23.jpg" />
            <Image src="/design/2d/25.jpg" />
          </div>
          <div>
            <Image src="/design/2d/19.jpg" />
            <Image src="/design/2d/5.jpg" />
            <Image src="/design/2d/13.jpg" />
            <Image src="/design/2d/12.jpg" />
            <Image src="/design/2d/11.jpg" />
            <Image src="/design/2d/24.jpg" />
            <Image src="/design/2d/28.jpg" />
          </div>
          <div>
            <Image src="/design/2d/8.jpg" />
            <Image src="/design/2d/9.jpg" />
            <Image src="/design/2d/15.jpg" />
            <Image src="/design/2d/30.jpg" />
            <Image src="/design/2d/17.jpg" />
            <Image src="/design/2d/22.jpg" />
            <Image src="/design/2d/27.jpg" />
          </div>
        </div>
      </Navigation>
    </>
  );
}
