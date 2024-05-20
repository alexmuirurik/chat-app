import Footer from "../components/layouts/footer"
import Navbar from "../components/layouts/navbar"
import Sidebar from "../components/layouts/sidebar"

const RootLayout = ({ children } : any) => {
    return (
        <html>
            <head>
                <title>Chat App</title>
                <link rel="stylesheet" href="/static/css/style.css" />
                <link rel="stylesheet" href="static/vendor/fontawesome/css/all.css" />
            </head>
            <body class='bg-[#0b141a]'>
                <Sidebar />
                <main className="main relative w-[calc(100vw_-_24rem)] h-svh left-96">
                    <Navbar />
                    <div className="main-content h-[calc(100vh_-_7rem)]">
                        { children }
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    )
}

export default RootLayout