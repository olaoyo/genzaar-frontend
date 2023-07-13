import Head from "next/head";
import HeaderNavigation from "../components/navigation/header/HeaderNavigation";
import Hero from "../components/routes/home/hero/Hero";
import Info from "../components/routes/home/info/Info";
import PocketMoney from "../components/routes/home/pocketMoney/PocketMoney";

export default function Home() {
  return (
    <>
      <Head>
        <title>Genzaar - Financial Management Tools for Young Adults</title>
        <meta
          name="description"
          content="Genzaar is a web application designed for young adults, offering a comprehensive suite of financial management tools. With Genzaar, users can easily track their finances, establish savings goals, and make informed investment decisions. The platform empowers individuals to take control of their financial well-being, providing a seamless experience for managing savings, exploring investment opportunities, and facilitating transfers."
        />
        <meta
          name="keywords"
          content="Financial management, Personal finance, Budgeting, Saving goals, Investment decisions, Money management, Financial tools, Young adults, Financial tracking, Money-saving strategies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavigation />
      <Hero />
      <Info />
      <PocketMoney />
    </>
  );
}
