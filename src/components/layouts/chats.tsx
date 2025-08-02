import { groups } from '../../lib/groups'

const Chats = () => {
    return (
        <div className='sidebar-chats w-10/12 overflow-y-scroll space-y-3 scroll-m-0'>
            {groups.map((group) => {
                return (
                    <div className="bg-accent flex items-center gap-3 p-3 rounded-2xl cursor-pointer">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={group.groupIcon}
                            alt=""
                        />
                        <div className="space-y-2">
                            <span className="font-semibold text-base">
                                {group.title}
                            </span>
                            <p className="text-sm text-neutral-400">
                                {group.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Chats
