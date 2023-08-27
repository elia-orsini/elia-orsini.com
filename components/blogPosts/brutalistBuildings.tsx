import BlogHeader from "@components/BlogHeader";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { FC } from "react";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function BrutalistBuildings() {
  const width = 1300;

  return (
    <div>
      <BlogHeader
        imgUrl="/blog/brutalist/barbican/IMG_3737.jpg"
        title="brutalist buildings of london"
      />

      <div className="flex flex-col mb-20">
        <div>
          <SectionTitle title="barbican centre" />

          <div className="grid grid-cols-2 p-10 gap-3">
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3716.jpg"
              width={width}
              height={width / 1.33}
            />
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3713.jpg"
              width={width}
              height={width / 1.33}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3709.jpg"
              width={width / 1.33}
              height={width}
            />
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3727.jpg"
              width={width / 1.33}
              height={width}
            />
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3717.jpg"
              width={width / 1.33}
              height={width}
            />
          </div>

          <div className="grid  grid-cols-3 gap-3 p-10">
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3725.jpg"
              width={width / 1.33}
              height={width}
            />
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3724.jpg"
              width={width / 1.33}
              height={width}
            />
            <Image
              alt=""
              src="/blog/brutalist/barbican/IMG_3721.jpg"
              width={width / 1.33}
              height={width}
            />
          </div>
        </div>

        <div>
          <SectionTitle title="Institute of Education" />
          <div className="grid grid-cols-3 gap-1">
            <Image
              alt=""
              src="/blog/brutalist/education/IMG_3817.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/education/IMG_3818.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/education/IMG_3819.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
          </div>
        </div>

        <div>
          <SectionTitle title="brunswick centre" />
          <div className="grid grid-col gap-1 p-2">
            <div className="grid grid-cols-2 gap-4">
              <Image
                alt=""
                src="/blog/brutalist/brunswick/IMG_3799.jpg"
                className=""
                width={1000 / 1.33}
                height={1000}
              />
              <Image
                alt=""
                src="/blog/brutalist/brunswick/IMG_3800.jpg"
                className=""
                width={1000 / 1.33}
                height={1000}
              />
            </div>
            <div className="mx-auto grid grid-cols-3 gap-4 mt-4">
              <Image
                alt=""
                src="/blog/brutalist/brunswick/IMG_3798.jpg"
                className="my-auto"
                width={1000 / 1.33}
                height={1000}
              />
              <div className="col-span-2">
                <Image
                  alt=""
                  src="/blog/brutalist/brunswick/IMG_3803.jpg"
                  width={1000}
                  height={1000 / 1.33}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle title="st giles hotel" />
          <div className="grid grid-cols-2 gap-1 px-20">
            <Image
              alt=""
              src="/blog/brutalist/st-giles/IMG_3828.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/st-giles/IMG_3829.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/st-giles/IMG_3830.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/st-giles/IMG_3831.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
          </div>
        </div>

        <div>
          <SectionTitle title="centre point" />
          <div className="grid grid-cols-2 gap-2">
            <Image
              alt=""
              src="/blog/brutalist/centre-point/IMG_3842.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/centre-point/IMG_3843.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
          </div>
        </div>

        <div>
          <SectionTitle title="mermaid house" />
          <div className="grid grid-cols-2">
            <Image
              alt=""
              src="/blog/brutalist/mermaid/IMG_3864.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/mermaid/IMG_3865.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/mermaid/IMG_3866.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/brutalist/mermaid/IMG_3867.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
          </div>
        </div>

        <div>
          <SectionTitle title="royal college of physicians" />
          <div className="grid bg-black grid-cols-2 gap-3 p-2">
            <div className="flex">
              <div className="my-auto">
                <Image
                  alt=""
                  src="/blog/brutalist/physicians/IMG_3781.jpg"
                  className="border border-white"
                  width={1000 / 1.33}
                  height={1000}
                />
              </div>
            </div>
            <div>
              <Image
                alt=""
                className="border border-white"
                src="/blog/brutalist/physicians/IMG_3788.jpg"
                width={1000}
                height={1000 / 1.33}
              />
              <Image
                alt=""
                className="mt-3 border border-white"
                src="/blog/brutalist/physicians/IMG_3794.jpg"
                width={1000 / 1.33}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle title="golden lane estate" />

          <div className="flex flex-col p-5">
            <div className="mx-auto px-40">
              <Image
                alt=""
                src="/blog/brutalist/golden-lane-estate/IMG_3742.jpg"
                width={1000}
                height={1000 / 1.33}
              />
            </div>
            <div className="grid grid-cols-2 gap-1 px-40 pt-1">
              <Image
                alt=""
                src="/blog/brutalist/golden-lane-estate/IMG_3744.jpg"
                width={1000 / 1.33}
                height={1000}
              />
              <Image
                alt=""
                src="/blog/brutalist/golden-lane-estate/IMG_3745.jpg"
                width={1000 / 1.33}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle title="stelfox house" />

          <div className="bg-slate-800 p-10">
            <div className="grid  grid-cols-2 gap-10">
              <Image
                alt=""
                src="/blog/brutalist/stelfox-house/IMG_3755.jpg"
                width={1000 / 1.33}
                height={1000}
              />
              <Image
                alt=""
                src="/blog/brutalist/stelfox-house/IMG_3753.jpg"
                width={1000 / 1.33}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex h-40">
      <p className={`mx-auto my-auto text-4xl ${koulen.className}`}>{title}</p>
    </div>
  );
};

export default BrutalistBuildings;
