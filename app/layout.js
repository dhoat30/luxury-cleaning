'use client'
//import css file 
import './globals.css'
import './tokens.css'
// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Work_Sans, Gilda_Display } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../utlis/themeSettings'


import { GoogleTagManager } from '@next/third-parties/google'

// fonts settings

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  preload: true
})
const gilda_display = Gilda_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gilda-display',
  preload: true
})

export default function RootLayout({ children }) {


  return (
    <html lang="en" className={`${work_sans.variable} ${gilda_display.variable}`}>
      {/* <GoogleTagManager gtmId="GTM-N347V98" /> */}
      <body >
        <ThemeProvider theme={lightTheme}>
          {children}
          {/* <Footer /> */}
        </ThemeProvider>

      </body>
    </html>
  )
}