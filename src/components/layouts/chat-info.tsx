import { PhoneCall, Pin, User, Video } from 'lucide-react'

const ChatInfo = () => {
    return (
        <div className="w-3/12 space-y-4">
            <div className="bg-[#1a1a1a] flex items-center justify-between p-4 rounded-2xl">
                <div className="bg-yellow-200 flex items-center justify-center w-12 h-12 rounded-full">
                    <PhoneCall color='black' />
                </div>
                <div className="bg-[#303030] flex items-center justify-center w-12 h-12 rounded-full">
                    <Video />
                </div>
                <div className="bg-[#303030] flex items-center justify-center w-12 h-12 rounded-full">
                    <Pin />
                </div>
                <div className="bg-[#303030] flex items-center justify-center w-12 h-12 rounded-full">
                    <User />
                </div>
            </div>
			<div className="bg-[#1a1a1a] space-y-4 p-4 rounded-2xl">
				<div className="title">
					<h3>Members</h3>
				</div>
				
			</div>
			<div className="bg-[#1a1a1a] space-y-4 p-4 rounded-2xl">
				<div className="title">
					<h3>Files</h3>
				</div>
				
			</div>			
        </div>
    )
}

export default ChatInfo
