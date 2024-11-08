import { PhoneCall, Plus, Smile } from "lucide-react"

const Footer = () => {
    return (
        <footer className='footer bg-[#202c33] flex items-center border-t border-[#222c33] h-14'>
            <div className="flex">
                <span className='px-3'>
                    <Smile />
                </span>
                <span className='px-3'>
                    <Plus />
                </span>
            </div>
            <div className="w-full">
                <input name="" id="" className='bg-[#0b141a] w-full text-gray-300 p-3 rounded-md' />
            </div>
            <div className="w-12">
                <span className="ps-3">
                    <PhoneCall />
                </span>
            </div>
        </footer>
    )
}

export default Footer