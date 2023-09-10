import BlogHeader from "@components/BlogHeader";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { FC } from "react";
import Head from "next/head";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function BrutalistBuildings() {
  const width = 1300;

  return (
    <>
      <BlogHeader
        imgUrl="/blog/brutalist/barbican/IMG_3737.jpg"
        title="brutalist buildings of london"
      />

      <Head>
        <title>brutalist buildings of london</title>
        <meta
          property="og:image"
          content="/blog/brutalist/barbican/IMG_3737.jpg"
        />
      </Head>

      <div className="flex flex-col mb-20">
        <div>
          <SectionTitle title="barbican centre" />

          <SectionDescription
            description="A 1970s masterpiece of brutalist architecture, the Barbican Centre
            stands as a multifunctional complex characterized by its robust
            concrete structure. Integrating cultural spaces and residential
            towers, it remains an iconic representation of the era's
            architectural vision."
          />

          <div className="grid grid-cols-2 lg:p-5 gap-1 lg:gap-3">
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

          <div className="grid grid-cols-3 lg:p-5 gap-1 lg:gap-3">
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

          <div className="grid  grid-cols-3 lg:p-5 gap-1 lg:gap-3">
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

          <SectionDescription description="The Institute of Education, part of University College London, is a prominent example of brutalist architecture. Its bold concrete design features geometric shapes and a distinctive tower, reflecting the era's architectural ethos while serving as an important center for educational research and development." />

          <div className="grid sm:grid-cols-3 gap-1">
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

          <SectionDescription description="The Brunswick Centre, completed in the 1970s, is a striking brutalist development with its distinctive stepped terraces and exposed concrete. Combining residential and commercial spaces, it stands out as a unique example of the style in London's urban fabric." />

          <div className="grid grid-col gap-1 ">
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

          <SectionDescription description="A prominent brutalist presence, the St Giles Hotel features a bold concrete façade and geometric design, capturing the essence of the era's architectural language while accommodating modern hospitality needs." />

          <div className="grid grid-cols-2 gap-1">
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

          <SectionDescription description="Standing tall in the heart of London, Centre Point is an iconic brutalist skyscraper built in the 1960s. Its striking design, characterized by a concrete exterior with exposed services and a raised podium, remains a significant symbol of brutalist architecture in the city." />

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

          <SectionDescription description="A product of the brutalist era, Mermaid House's imposing concrete façade and geometric patterns showcase the movement's influence on commercial architecture, standing as a testament to its bold design principles." />

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

          <SectionDescription description="The Royal College of Physicians, built in the 1960s, boasts a bold brutalist design with textured concrete surfaces and innovative use of space, reflecting the movement's emphasis on form and function." />

          <div className="grid bg-black grid-cols-2 gap-3">
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

          <SectionDescription description="Constructed in the 1950s and 1960s, the Golden Lane Estate is a prime example of early brutalist architecture. Its distinctively angular buildings and exposed concrete elements make it a significant contribution to the style's legacy." />

          <div className="flex flex-col">
            <div className="mx-auto">
              <Image
                alt=""
                src="/blog/brutalist/golden-lane-estate/IMG_3742.jpg"
                width={1100}
                height={1100 / 1.33}
              />
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1">
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

          <SectionDescription description="Built during the brutalist movement, Stelfox House is notable for its raw concrete exterior and geometric lines, embodying the functional and utilitarian characteristics of the style in the heart of London's urban landscape." />

          <div>
            <div className="grid sm:grid-cols-2 gap-1">
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
    </>
  );
}

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex h-40">
      <p className={`mx-auto my-auto text-2xl sm:text-4xl ${koulen.className}`}>
        {title}
      </p>
    </div>
  );
};

const SectionDescription: FC<{ description: string }> = ({ description }) => {
  return <p className="lowercase mb-4">{description}</p>;
};

export default BrutalistBuildings;
