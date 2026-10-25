import Header from "@components/Header";
import Navigation from "@components/Navigation";
import WebsiteCard from "@components/code/WebsiteCard";
import SectionHeader from "@components/code/SectionHeader";

export default function Code() {
  return (
    <Navigation path="code">
      <Header title={`Code | Elia Orsini`} description="Code projects by Elia Orsini." />

      <div className="mb-20 flex w-full">
        <div className="mx-5 flex w-full max-w-3xl flex-col">
          <div className="mt-6 flex w-full flex-col sm:mt-14">
            <SectionHeader title="websites I built" />

            <ul className="ml-5 flex flex-col gap-4">
              <WebsiteCard
                title="fashionwiki"
                url="https://fashionwiki.co/"
                description="A collaborative encyclopedia focused on fashion."
                tech={["NEXT.JS", "NestJS", "PostgreSQL"]}
              />
              <WebsiteCard
                title="shelved fruits"
                url="https://shelvedfruits.eorsini.xyz/"
                description="Explore the translated and indexed archive of Fruits magazine."
                tech={["NEXT.JS", "SANITY"]}
              />
              <WebsiteCard
                title="angela ricciardi"
                url="https://www.angelaricciardi.com/"
                description="Website for photographer and artist Angela Ricciardi."
                tech={["NEXT.JS", "SANITY", "GSAP"]}
              />
              <WebsiteCard
                title="talome"
                url="https://www.talome.com/"
                description="Website for Talome talent agency based in Paris."
                tech={["NEXT.JS", "SANITY"]}
              />
              <WebsiteCard
                title="la macina sonora"
                url="https://www.lamacinasonora.com/"
                description="Website for the recording studio La Macina Sonora."
                tech={["REACT"]}
              />
              <WebsiteCard
                title="elia's personal database"
                url="https://db.eorsini.xyz/"
                description="Personal website to store things I enjoy."
                tech={["NEXT.JS", "NOTION API"]}
              />
              <WebsiteCard
                title="Immortal Mags"
                url="https://immortalmags.eorsini.xyz/"
                description="Keeping a list of worthy independent magazines."
                tech={["NEXT.JS", "NOTION API"]}
              />
              <WebsiteCard
                title="gft forever"
                url="https://gft-forever.vercel.app/"
                description="An archive of every film shown at my local independent cinema."
                tech={["NEXT.JS"]}
              />
              <WebsiteCard
                title="rho mcguire"
                url="https://rhomcguire.uk"
                description="Website for Scotland-based artist Rho Mcguire."
                tech={["NEXT.JS", "NOTION API"]}
              />
              <WebsiteCard
                title="insomnia events"
                url="https://www.insomniaevents.xyz/"
                description="Website for Insomnia Events."
                tech={["REACT"]}
              />
              <WebsiteCard
                title="yu's Cafes"
                url="https://yu-coffee-map.vercel.app/"
                description="Website for collecting cafes around the world."
                tech={["NEXT.JS", "NOTION API"]}
              />
              <WebsiteCard
                title="lazyLLM"
                url="https://lazyllm.eorsini.xyz/"
                description="Toolkit to create, test and analyse LLMs agains cognitive bias."
                tech={["NEXT.JS"]}
              />
              <WebsiteCard
                title="readu"
                url="https://readu-group-reading.vercel.app/"
                description="Readu brings friends together through shared reading experiences."
                tech={["NEXT.JS", "DYNAMO DB"]}
              />
            </ul>
          </div>

          <div className="mt-10 flex flex-col sm:mt-20">
            <SectionHeader title="websites i collaborated on" />
            <ul className="ml-5 flex flex-col gap-4">
              <WebsiteCard
                title="ARCHIVE.pdf"
                url="https://archivepdf.net/"
                description="Fashion Scans Archive, Articles & Content for the World."
                tech={["NEXT.JS", "STRAPI"]}
              />
            </ul>
          </div>

          <div className="mt-10 flex flex-col sm:mt-20">
            <SectionHeader title="3D projects" />

            <ul className="ml-5 flex flex-col gap-4">
              <WebsiteCard
                title="blenderWebViewer"
                url="https://github.com/elia-orsini/BlenderWebViewer"
                description="A web viewer for Blender."
                tech={["PYTHON", "REACT", "BLENDER"]}
              />
              <WebsiteCard
                title="Roman Map"
                url="https://hor-map.vercel.app/"
                description="3D interactive map for a web-based videogame."
                tech={["THREE.JS", "BLENDER"]}
              />
              <WebsiteCard
                title="Rooms in ancient rome"
                url="https://ancient-rome-3d-scenes.vercel.app/"
                description="Walkable 3D rooms in ancient rome."
                tech={["REACT THREE FIBER", "REACT"]}
              />
            </ul>
          </div>

          <div className="mt-10 flex flex-col sm:mt-20">
            <SectionHeader title="other projects" />

            <ul className="ml-5 flex flex-col gap-4">
              <WebsiteCard
                title="visual gpx"
                url="https://visual-gpx.vercel.app/"
                description="Generate cool graphics out of your Strava activities."
                tech={["NEXT.JS"]}
              />
              <WebsiteCard
                title="mars neural net"
                url="https://github.com/elia-orsini/mars-imagery-classification"
                description="Neural Network that classifies images taken on Mars."
                tech={["PYTHON", "TENSORFLOW"]}
              />
            </ul>
          </div>
        </div>
      </div>
    </Navigation>
  );
}
