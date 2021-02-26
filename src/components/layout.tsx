import Head from "next/head";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="fullsingle" className="page-template-page-fullsingle-split body">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="5QIa0Qhd9IEI3orOHks9oDQVquchqFreqIJLlEFD51g" />
        <meta name="description" content="Berlin based passionate Yogi. Vegan foodie &amp; coffee hunter. Dog lover." />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="always" />
        <meta property="og:title" content="Swifty Yoga" />
        <meta property="og:description" content="Berlin based passionate Yogi. Vegan foodie &amp; coffee hunter. Dog lover." />
        <meta property="og:image" content="http://swifty.yoga/social.jpg" />
        <meta property="og:url" content="http://swifty.yoga" />
        <meta name="twitter:title" content="Swifty Yoga" />
        <meta name="twitter:description" content="Passionate Berlin based Yogi. Vegan foodie &amp; coffee hunter. Dog lover." />
        <meta name="twitter:image" content="http://swifty.yoga/social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@swifty_yoga" />
        <meta name="twitter:creator" content="@swifty_yoga" />
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32" />
        <link rel="stylesheet" href="/assets/css/split.css" type="text/css" media="screen" />
	      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143058888-1"></script>
      </Head>
      {children}
      <script async src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
    </div>
  );
}
