import type { Message } from '../../lib/groups'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ChatMessage = (message: Message) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12">
                <Avatar>
                    <AvatarImage src={message.author.icon} />
                    <AvatarFallback>{message.author.name}</AvatarFallback>
                </Avatar>
            </div>
            <div className="w-10/12"></div>
            <div className="">
                <span>{message.time.toDateString()}</span>
            </div>
        </div>
    )
}

export default ChatMessage
