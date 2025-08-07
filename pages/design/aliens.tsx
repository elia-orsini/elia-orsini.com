import DesignFooter from "@components/design/footer";
import Header from "@components/Header";
import Image from "next/image";
import Navigation from "@components/Navigation";

export default function TwoD() {
  return (
    <>
      <Header title={`Aliens`} />

      <Navigation>
        <div className="mx-auto mt-20 grid w-4/5 flex-col gap-2 sm:grid-cols-3 md:mx-0">
          <div className="my-auto flex flex-col">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/aliens/alien3.jpg"
            />
          </div>
          <div className="my-auto flex flex-col">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/aliens/alien2.jpg"
            />
          </div>
          <div className="my-auto flex flex-col">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/aliens/alien1.jpg"
            />
          </div>
        </div>
        <DesignFooter previous="/design/2d" />
      </Navigation>
    </>
  );
}
