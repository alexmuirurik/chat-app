import { groups } from '../../lib/groups'

const Chats = () => {
    return (
        <div className='w-10/12 space-y-3 overflow-y-scroll hidden-scrollbar'>
            {groups.map((group) => {
                return (
                    <div className="bg-accent flex items-center px-4 py-2 rounded-2xl cursor-pointer">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={group.groupIcon}
                            alt=""
                        />
                        <div className="space-y-2 p-2 overflow-hidden">
                            <span className="font-semibold text-neutral-300 text-base">
                                {group.title}
                            </span>
                            <p className="text-sm text-neutral-400 text-nowrap overflow-ellipsis">
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
