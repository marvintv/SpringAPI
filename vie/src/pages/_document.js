import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Fan Fusion, OnlyFans Agency, adult content management, smart onlyfans management, of management, of agency, onlyfans agency, content management, adult content, Fan-Creator Collaboration, Premium Fan Subscriptions, Exclusive Fan Interaction, Content Monetization Strategies, Fan Engagement Solutions, Creator Promotion Services, Personalized Fan Experiences, Subscriber Retention Strategies, Social Media Marketing for Creators, Adult Content Marketing, Subscription-based Fan Platform, OnlyFans Content Optimization, Content Creation Consulting, Subscriber Growth Tactics, Monetizing Adult Content, Subscription Fanbase Management, Fan Loyalty Programs, VIP Fan Experiences, Earnings Maximization for Creators, Niche Content Management, Influencer Fan Engagement, Exclusive Content Delivery, Adult Entertainer Support, Fan Relationship Building, Creative Content Promotion, Fan-Monetized Content, Managed OnlyFans Promotion, Subscription Content Strategy, Adult Content Creators Support"
          />
          <meta
            name="description"
            content="Unlock your potential with Fan Fusion – the premier OnlyFans agency dedicated to empowering adult content creators. Elevate your subscriber engagement, optimize monetization strategies, and build lasting fan relationships with our expert guidance. Join us to take your OnlyFans journey to new heights!"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
