import BlogHeader from "@components/BlogHeader";
import Image from "next/image";

function BrutalistBuildings() {
  const width = 1300;
  return (
    <div>
      <BlogHeader
        imgUrl="/blog/brutalist/barbican/IMG_3737.jpg"
        title="brutalist buildings in london"
      />

      <div className="flex flex-col sm:w-4/5 px-10 sm:mx-0 mb-20">
        <p>barbican centre</p>

        <div className="grid  grid-cols-2 gap-1">
          <div className="">
            <Image
              src="/blog/brutalist/barbican/IMG_3713.jpg"
              width={width}
              height={width / 1.6}
            />
            <Image
              src="/blog/brutalist/barbican/IMG_3716.jpg"
              width={width}
              height={width / 1.6}
            />
            <Image
              src="/blog/brutalist/barbican/IMG_3717.jpg"
              width={width}
              height={width / 1.6}
            />
            <Image
              src="/blog/brutalist/barbican/IMG_3725.jpg"
              width={width / 1.6}
              height={width}
            />
          </div>
          <div className="">
            <Image
              src="/blog/brutalist/barbican/IMG_3721.jpg"
              width={width / 1.6}
              height={width}
            />
            <Image
              src="/blog/brutalist/barbican/IMG_3735.jpg"
              width={width}
              height={width / 1.6}
            />
            <Image
              src="/blog/brutalist/barbican/IMG_3709.jpg"
              width={width}
              height={width / 1.6}
            />
          </div>
        </div>

        <p>golden lane estate</p>
        <p>stelfox house</p>
        <p>royal college of physicians</p>
        <p>brunswick centre</p>
        <p>Institute of Education</p>
        <p>st giles hotel</p>
        <p>centre point</p>
        <p>space house</p>
        <p>mermaid house</p>
      </div>
    </div>
  );
}

export default BrutalistBuildings;
