import { Inter } from 'next/font/google'
import '@/app/global.css'
import Header from '@/components/frontend/Header'

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});
const menu = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={inter.className}>
            <body className="antialiased">
                <Header className={`${inter.className} antialiased`} menu={menu}>
                    {children}
                </Header>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'SchemeEdge',
}

export default RootLayout
