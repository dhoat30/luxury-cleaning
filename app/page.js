import HomePage from '@/components/Pages/HomePage'
import Hero from '@/components/UI/Hero/Hero';
import { getOptions, getPageData } from "@/utlis/fetchData";

import OptimizedHero from '@/components/UI/Hero/OptimizedHero/OptimizedHero';
import Footer from '@/components/UI/Footer/Footer';
import Header from '@/components/UI/Header/Header';
import USP from '@/components/UI/USP/USP';


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id

  // fetch data
  const data = await getPageData("home");

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  const seoData = data[0]?.yoast_head_json
  return {
    title: seoData?.title,
    description: seoData?.description,
    metadataBase: new URL('https://luxurycleaning.nz'),
    alternates: {
      canonical: `https://luxurycleaning.nz`,
    },
    openGraph: {
      title: seoData?.title,
      description: seoData?.description,
      url: 'https://luxurycleaning.nz',
      siteName: 'Luxury Cleaning',

      images: [
        {
          url: seoData?.og_image && seoData.og_image[0].url,
          width: 800,
          height: 600,
        },
        {
          url: seoData?.og_image && seoData.og_image[0].url,
          width: 1800,
          height: 1600,
        },
      ],
      type: 'website',
    },
  }
}


export default async function Home() {
  const data = await getPageData("home");
  const options = await getOptions()
  const uspData = {
    cards: options.usp
  }
  return (
    <>
      <Header />
      <main >
        <OptimizedHero slug="home" />
        <USP data={uspData} />
        <HomePage data={data} techLogos={options.tech_logos} />
      </main>
      <Footer />

    </>

  )
}
