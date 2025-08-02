import { icons } from '../../lib/icons'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const SidebarIcons = () => {
    return (
        <div className="bg-[#1a1a1a] space-y-3 py-3 px-4 rounded-2xl">
            {icons.map((icon) => {
                return (
                    <div className="bg-[#303030] flex items-center justify-center space-y-2 h-16 w-16 rounded-full">
                        <Avatar className="h-16 w-16">
                            {icon.icon && (
                                <AvatarImage
                                    className="bg-yellow-600"
                                    color="yellow"
                                    src={icon.icon}
                                />
                            )}
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
