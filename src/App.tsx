import Nav from './components/layouts/nav'
import Sidebar from './components/layouts/sidebar'

const App = () => {
    return (
        <div className="flex gap-3 w-full h-screen p-2">
            <Sidebar />
            <main>
                <Nav />
            </main>
        </div>
    )
}

export default App
