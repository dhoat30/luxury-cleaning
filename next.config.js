const { siteUrl } = require('./next-sitemap.config');

// bundle analyzer 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: 'luxury-cleaning.local',
            port: '',
            pathname: '/**'
        }],
    },
    env: {
        url: "http://luxury-cleaning.local",
        siteUrl: "https://luxurycleaning.nz",
        name: "Luxury Cleaning - Tauranga",
        darkLogo: "/dark-logo.png",
        gurpreet: "/gurpreet.jpg"
    },

}

module.exports = withBundleAnalyzer(nextConfig)
