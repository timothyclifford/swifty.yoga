import { createClient } from "contentful";
import { GetStaticPropsResult } from "next";
import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

type Props = {
  photo: string;
  title: string;
  description: string;
  schedule: [];
};

const Index = ({ photo, title, description, schedule }: Props) => {
  return (
    <>
      <Head>
        <title>Schedule - Swifty Yoga</title>
      </Head>
      <Layout>
        <div className="fs-split">
          <div
            id="photo"
            className="split-image"
            style={{ backgroundImage: `url(https:${photo})` }}
          ></div>
          <div className="split-content">
            <div className="split-content-vertically-center">
              <div className="navigation">
                <a href="/">Home</a>
                <a href="/schedule/">Schedule</a>
                <a href="https://forms.gle/4oMcDAyCxGD6Kwzq8" target="_blank">Register here</a>
              </div>
              <div className="split-intro">
                <h1 className="my-name" id="name">
                  <span id="whoami">Lisa Czerny</span>
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
              <h2 className="heading">{title}</h2>
              <ReactMarkdown
                escapeHtml={true}
                source={description}
              ></ReactMarkdown>
              <div className="schedule-items">
                {schedule.map((item: { title: string; times: string[], location: { lat: number, lon: number }}) => (
                  <div key={item.title} className="item">
                    <h3>{item.title}</h3>
                    <div className="times">
                    {item.times.map(t => (
                      <p key={t}>{t}</p>
                    ))}
                    </div>
                    <div className="map">
                      <iframe
                        width="100%"
                        height="250" style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDHr70QhxTZUiA9Z8vmTHdZOB7ksRYMbhY&q=${item.location.lat},${item.location.lon}&center=${item.location.lat},${item.location.lon}`}>
                      </iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <script async src="/assets/script.js"></script>
      </Layout>
    </>
  );
};

// 

const getScheduleItem = (fields) => {
  return {
    title: fields["title"],
    times: fields["times"],
    location: fields["location"]
  }
}

const getContentfulContent = async () => {
  const client = createClient({
    space: "jzsz7gl5og1r",
    accessToken: "86sDFMKyVACYsGWkeMaC_3tRIAeSaK3KKmdSXqoIgSo",
  });
  const contentEntry = await client.getEntry("5vUoCSMq6ZHq5QkS9DH61D");
  console.log(JSON.stringify(contentEntry));
  return {
    photo: contentEntry.fields["photo"].fields.file.url,
    title: contentEntry.fields["title"],
    description: contentEntry.fields["description"],
    schedule: contentEntry.fields["schedule"].map(s => getScheduleItem(s.fields))
  };
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const content = await getContentfulContent();
  return {
    props: {
      ...content
    },
    revalidate: 1,
  };
};

export default Index;
