import BlogHeader from "@components/BlogHeader";
import Image from "next/image";
import Head from "next/head";

function AlwaysEndingTunnel() {
  return (
    <>
      <Head>
        <title>always ending tunnel</title>
        <meta property="og:image" content="/blog/exhale/intro.jpg" />
      </Head>

      <BlogHeader
        imgUrl="/blog/alwaysEndingTunnel/1.jpg"
        title="always ending tunnel"
      />

      <div
        className="w-full sm:w-full mx-auto -mt-40 -mb-20"
        style={{ padding: "100% 0 0 0", position: "relative" }}
      >
        <iframe
          src="https://player.vimeo.com/video/867718088?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="exhale"
        ></iframe>
      </div>

      <div className="grid grid-cols-2">
        <Image
          alt=""
          src="/blog/alwaysEndingTunnel/1.jpg"
          className=""
          width={2886}
          height={1804}
        />
        <Image
          alt=""
          src="/blog/alwaysEndingTunnel/2.jpg"
          className=""
          width={2886}
          height={1804}
        />
        <Image
          alt=""
          src="/blog/alwaysEndingTunnel/3.jpg"
          className=""
          width={2886}
          height={1804}
        />
        <Image
          alt=""
          src="/blog/alwaysEndingTunnel/4.jpg"
          className=""
          width={2886}
          height={1804}
        />
      </div>

      <div className="flex flex-col mb-20 mt-20">
        <p className="">
          &apos;always ending tunnel&apos; is a simple low effort 3d scene
          rendered in unreal engine. the aim of this project was to mostly test
          out the UE5 suites of tools to render high quality scenes given that i
          am planning to slowly transition from rendering in blender cycles to
          completely render my scenes in UE.
          <br />
          i have actually been using unreal engine for about six months,
          however, before this project i had not properly rendered anything out
          of it.
          <br />
          <br />
          when i say it was a low-effort type of project what i mean is that all
          the meshes and textures present in the scene you see have actually
          been imported using quixel bridge and i must say they are insane in
          terms of level of details.
          <br />
          <br />
          the whole thing probably took me about four hours that were mostly
          spent reorganising ideas and understanding light settings and effects.
          everything was quite smooth except for a few random crashes of the
          editor and for one very big issue i couldn&apos;t solve. this
          limitation is also the reason the final scene does not include any
          natural light and i think it&apos;s also the main factor that led me
          opting for a tunnel. the issue is that, somehow, the objects i import
          from quixel bridge are not affected whatsoever by the sky light. this
          basically means that when a mesh is not hit by the sun is completely
          dark. the parts that stay in the shadows are fully black. i am sure
          there is a solution to this but after having spent more than half a
          hour looking for the solution i then gave up.
          <br />
          <br />
          the main elements in the scene you see are textured surfaces (like the
          pavements and the walls), various textured meshes (like the railings
          or the bins) and decals. decals are basically these
          &apos;stickers&apos; you can apply on any surface you want. they are
          created from simply using a transparent texture and in this case i
          used them for the various graffiti on the walls and for the rubbish
          next to the fallen bin. if you get close enough to the rubbish you
          will clearly notice that it&apos;s flat (duh) but i think it works
          well for situations where you only get a glimpse of it.
        </p>
      </div>
    </>
  );
}

export default AlwaysEndingTunnel;
