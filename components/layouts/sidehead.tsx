import { EllipsisVertical, Infinity, MessageCircleHeartIcon, MessageCircleMore } from "lucide-react"
import Link from "next/link"

const SideHead = () => {
    return (
        <div className="sidebar-header flex items-center gap-12 bg-[#202c33] h-14">
            <div className="avatar w-10 mx-3 py-3">
                <Link href='/'>
                    <img src='https://randomuser.me/api/portraits/men/6.jpg' alt="" className='rounded-full w-full' />
                </Link>
            </div>
            <div className="flex justify-between items-center text-gray-400 gap-2 me-6 w-full">
                <Link href="/about" className="me-4 w-5">
                    <span data-icon="status-outline" className="">
                        <Infinity />
                    </span>
                </Link>
                <Link href="/share" className="me-4 w-5">
                    <span data-icon="newsletter-outline" className="">
                        <MessageCircleHeartIcon />
                    </span>
                </Link>
                <Link href="/share" className="me-4 w-5">
                    <span data-icon="new-chat-outline" className="">
                        <MessageCircleMore />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default SideHead