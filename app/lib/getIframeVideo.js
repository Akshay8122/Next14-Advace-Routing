// components/YouTubeEmbed.js

import Head from "next/head";

const YouTubeEmbed = ({ videoId, width, height }) => {
  return (
    <>
      <Head>
        <script async src="https://www.youtube.com/iframe_api"></script>
      </Head>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%", // Aspect ratio: 16:9
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Next.js 14 Conf."
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          width={width}
          height={height}
        ></iframe>
      </div>
    </>
  );
};

export default YouTubeEmbed;
