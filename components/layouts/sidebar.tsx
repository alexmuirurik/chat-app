import SideHead from "./sidehead"
import Sidelist from "./sidelist"

const Sidebar = () => {
    return (
        <aside className='hidden md:block fixed bg-[#111b21] border-e border-[#263239] w-96 h-svh'>
            <SideHead />
            <div className="sidebar-content h-[calc(100vh_-_7rem)]">
                <div className="search h-12 overflow-y-auto pt-2">
                    <input type="text" className="bg-[#202c33] rounded-md p-1 ps-4 w-full text-gray-300 placeholder:text-sm hover:outline-0 focus:outline-0" placeholder="Search" />
                </div>
                <div className="btns flex items-center justify-start gap-2 border-b border-[#263239] h-9 ps-3 pb-2">
                    <button className='bg-teal-900 opacity-55 text-sm text-teal-400 rounded-xl py-1 px-2'>All</button>
                    <button className='bg-gray-600 opacity-55 text-sm text-gray-300 rounded-xl py-1 px-2'>Unread</button>
                    <button className='bg-gray-600 opacity-55 text-sm text-gray-300 rounded-xl py-1 px-2'>Groups</button>
                </div>
                <div className="peoples flex flex-col overflow-y-auto">
                    <Sidelist />
                </div>
            </div>
            <div className="sidebar-footer bottom-0 border-t border-[#222c33] bg-[#111b21] h-14">

            </div>
        </aside>
    )
}

export default Sidebar