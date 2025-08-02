import ChatSection from './components/layouts/chat-section'
import Nav from './components/layouts/nav'
import Sidebar from './components/layouts/sidebar'

const App = () => {
    return (
        <div className="flex gap-3 w-full h-screen p-2">
            <Sidebar />
            <main className="w-full">
                <Nav />
                <div className="flex gap-3">
                    <ChatSection />
                </div>
            </main>
        </div>
    )
}

export default App
