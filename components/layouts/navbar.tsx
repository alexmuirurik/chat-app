import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Ellipsis, Video } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="nav flex justify-between items-center bg-[#202c33] h-14 px-4 py-2">
            <div className="flex">
                <div className="avatar w-10 mx-3 py-3">
                    <img src='https://randomuser.me/api/portraits/men/64.jpg' alt="" className='rounded-full w-full' />
                </div>
                <div className="py-3">
                    <h4 className='text-white'>JohnSon Next</h4>
                    <p className='text-gray-500 text-xs'>Last Seen Today 08:22</p>
                </div>
            </div>
            <div className="flex items-center text-gray-400 gap-2">
                <a href="#Groups" className="w-5">
                    <span data-icon="status-outline" className="">
                        <Ellipsis />
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar