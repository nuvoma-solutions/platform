import Footer from "@/components/ui/Footer/Footer"
import Navbar from "@/components/ui/Navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout