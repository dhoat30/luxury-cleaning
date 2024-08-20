import GetQuotePage from "@/components/Pages/GetQuotePage/GetQuotePage"
import Footer from "@/components/UI/Footer/Footer"
import Header from "@/components/UI/Header/Header"
export const metadata = {
    title: "Get a Custom Cleaning Quote | Luxury Cleaning Services in Tauranga",
    description: "Request a personalised cleaning quote from Luxury Cleaning. Our expert team tailors services to meet your needs, ensuring a pristine home every time. ",
    metadataBase: new URL('https://luxurycleaning.nz'),
    alternates: {
        canonical: `https://luxurycleaning.nz/get-a-quote`,
    },
    openGraph: {
        title: "Get a Custom Cleaning Quote | Luxury Cleaning Services in Tauranga",
        description: "Request a personalised cleaning quote from Luxury Cleaning. Our expert team tailors services to meet your needs, ensuring a pristine home every time. ",
        metadataBase: new URL('https://luxurycleaning.nz'),
        url: 'https://luxurycleaning.nz',
        siteName: 'Luxury Cleaning',
        images: [
            {
                url: "/black-logo.jpg",
                width: 800,
                height: 600,
            },

        ],
        type: 'website',
    },
}
export default function Home() {
    return (
        <>
            <Header showBackgroundColor={1} />

            <Footer showCTA={true} />
        </>

    )
}
