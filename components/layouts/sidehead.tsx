const SideHead = () => {
    return (
        <div className="sidebar-header flex justify-between items-center bg-[#202c33] h-14">
            <div className="avatar w-10 mx-3 py-3">
                <img src='/static/img/peoples/alexmuiruri.jpg' alt="" class='rounded-full w-full' />
            </div>
            <div className="flex items-center text-gray-400 gap-2 me-6">
                <a href="#Groups" className="me-4 w-5">
                    <span data-icon="status-outline" class="">
                        <i class="fa-solid fa-infinity"></i>
                    </span>
                </a>
                <a href="#statuses" className="me-4 w-5">
                    <span data-icon="newsletter-outline" class="">
                        <i class="fa-regular fa-comment"></i>
                    </span>
                </a>
                <a href="#chats" className="me-4 w-5">
                    <span data-icon="new-chat-outline" class="">
                        <i class="fa-solid fa-comment-medical"></i>
                    </span>
                </a>
                <a href="#chats" className="me-4 w-1.5">
                    <span data-icon="menu" class="">
                        <i class="fa-solid fa-ellipsis-v"></i>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default SideHead