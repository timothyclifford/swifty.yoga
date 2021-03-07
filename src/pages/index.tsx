import axios from "axios";
import { createClient } from "contentful";
import { GetStaticPropsResult } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

type Props = {
  instaFeed: Array<{ image: string; url: string }>;
  content: {
    whoami: string;
    title: string;
    bio: string;
    photo: string;
  };
};

const Index = ({ instaFeed, content }: Props) => {
  const [posts] = useState(instaFeed);
  return (
    <>
      <Head>
        <title>Swifty Yoga</title>
      </Head>
      <Layout>
        <div className="fs-split">
          <div
            id="photo"
            className="split-image"
            style={{ backgroundImage: `url(https:${content.photo})` }}
          ></div>
          <div className="split-content">
            <div className="split-content-vertically-center">
              <div className="navigation">
                <a href="/">Home</a>
                <a href="/schedule/">Schedule</a>
              </div>
              <div className="split-intro">
                <h1 className="my-name" id="name">
                  <span id="whoami">{content.whoami}</span>
                  <a
                    href="https://www.instagram.com/swiftyyoga/"
                    target="_blank"
                    style={{ borderBottom: "none" }}
                  >
                    <img
                      width="18"
                      style={{ marginLeft: "15px" }}
                      src="/images/instagram.png"
                    ></img>
                  </a>
                  <a
                    href="https://www.facebook.com/swiftyyoga"
                    target="_blank"
                    style={{ borderBottom: "none" }}
                  >
                    <img
                      width="18"
                      style={{ marginLeft: "15px" }}
                      src="/images/facebook.png"
                    ></img>
                  </a>
                </h1>
              </div>
              <h2 className="heading">{content.title}</h2>
              <div className="split-bio">
                <ReactMarkdown
                  escapeHtml={true}
                  source={content.bio}
                ></ReactMarkdown>
              </div>
              <h3 className="heading">Instagram</h3>
              <div id="instagram">
                {posts.map((post: { url: string; image: string }) => (
                  <a key={post.url} href={post.url} target="_blank">
                    <img src={post.image} alt="Instagram post" />
                  </a>
                ))}
              </div>
              {/* <div className="split-bio footer">
                <a href="/">Home</a>
                <a href="/impressum.html">Impressum</a>
                <a href="/agb.html">AGB</a>
                <a href="/datenschutz.html">Datenschutz</a>
              </div> */}
            </div>
          </div>
        </div>
        <script async src="/assets/script.js"></script>
      </Layout>
    </>
  );
};

const begrudginglyUseInstagramApi = async (): Promise<
  Array<{ image: string; url: string }>
> => {
  const instagramApiSucks = await axios.get(
    encodeURI(
      'https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"9383838398","first":8,"after":null}'
    )
  );
  return instagramApiSucks.data.data.user.edge_owner_to_timeline_media.edges.map(
    (e: { node: { display_url: any; shortcode: any } }) => ({
      image: e.node["thumbnail_resources"][4].src,
      url: `https://www.instagram.com/p/${e.node.shortcode}/`,
    })
  );
};

const getContentfulContent = async () => {
  const client = createClient({
    space: "jzsz7gl5og1r",
    accessToken: "86sDFMKyVACYsGWkeMaC_3tRIAeSaK3KKmdSXqoIgSo",
  });
  const contentEntry = await client.getEntry("6iu8KUEIeRj87OMtRtJGIY");
  const whoami = contentEntry.fields["name"];
  const title = contentEntry.fields["title"];
  const bio = contentEntry.fields["content"];
  const photo = contentEntry.fields["photo"].fields.file.url;
  return {
    whoami,
    title,
    bio,
    photo,
  };
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      instaFeed: await begrudginglyUseInstagramApi(),
      content: await getContentfulContent(),
    },
    revalidate: 1,
  };
};

export default Index;
