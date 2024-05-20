const Navbar = () => {
    return (
        <nav className="nav flex justify-between items-center bg-[#202c33] h-14 px-4 py-2">
            <div className="flex">
                <div className="avatar w-10 mx-3 py-3">
                    <img src='https://randomuser.me/api/portraits/men/64.jpg' alt="" class='rounded-full w-full' />
                </div>
                <div className="py-3">
                    <h4 class='text-white'>Gathogo</h4>
                    <p class='text-gray-500 text-xs'>Last Seen Today 08:22</p>
                </div>
            </div>
            <div className="flex items-center text-gray-400 gap-2">
                <a href="#Groups" className="me-4 w-5">
                    <span data-icon="status-outline" class="">
                        <i class="fa-solid fa-video"></i>
                    </span>
                </a>
                <a href="#Groups" className="me-4 w-5">
                    <span data-icon="status-outline" class="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                </a>
                <a href="#Groups" className="w-5">
                    <span data-icon="status-outline" class="">
                        <i class="fa-solid fa-ellipsis-v"></i>
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar