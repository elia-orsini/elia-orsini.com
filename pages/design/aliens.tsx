import Header from "@components/Header";
import Image from "@components/Image";
import Navigation from "@components/Navigation";

export default function TwoD() {
  return (
    <>
      <Header title={`aliens | elia orsini`} />

      <Navigation>
        <div className="flex-col mx-auto grid sm:grid-cols-3 w-4/5 my-20 gap-2">
          <div className="flex flex-col my-auto">
            <Image src="/design/aliens/alien3.jpg" />
          </div>
          <div className="flex flex-col my-auto">
            <Image src="/design/aliens/alien2.jpg" />
          </div>
          <div className="flex flex-col my-auto">
            <Image src="/design/aliens/alien1.jpg" />
          </div>
        </div>
      </Navigation>
    </>
  );
}
