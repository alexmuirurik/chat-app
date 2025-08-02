import { icons } from '../../lib/icons'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const SidebarIcons = () => {
    return (
        <div className="bg-[#1a1a1a] space-y-3 py-3 px-3 rounded-2xl">
            {icons.map((icon) => {
                return (
                    <div className="bg-[#303030] flex items-center justify-center space-y-2 h-14 w-14 rounded-full">
                        <Avatar className="">
                            {icon.icon && <AvatarImage src={icon.icon} />}
                            <AvatarFallback className="bg-transparent rounded-none overflow-ellipsis">
                                {icon.name}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                )
            })}
        </div>
    )
}

export default SidebarIcons
