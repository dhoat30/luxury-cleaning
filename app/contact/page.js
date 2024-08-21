import Contact from '@/components/Pages/Contact/Contact'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'
import USP from '@/components/UI/USP/USP'
import { getPageData, getOptions } from '@/utlis/fetchData'



export async function generateMetadata({ params, searchParams }, parent) {

    // fetch data
    const data = await getPageData("contact")
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json
        return {
            title: seoData.title,
            description: seoData.description,
            metadataBase: new URL('https://luxurycleaning.nz'),
            openGraph: {
                title: seoData.title,
                description: seoData.description,
                url: 'https://luxurycleaning.nz',
                siteName: 'Luxury Cleaning',
                images: [
                    {
                        url: seoData.og_image && seoData.og_image.url,
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

}

export default async function Page() {



    const data = await getPageData("contact")
    const options = await getOptions()
    const uspData = {
        cards: options.usp
    }
    return (
        <>
            <Header showBackgroundColor={1} />
            <USP data={uspData} marginTop={1} />
            <main >
                <Contact pageData={data[0]} techLogos={options.tech_logos} />
            </main>
            <Footer showCTA={false} />
        </>

    )
}
