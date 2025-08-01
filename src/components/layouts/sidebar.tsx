import { groups } from '../../lib/groups'

const Sidebar = () => {
    return (
        <aside className="space-y-px">
            <div className="p-px">
                <span className="text-4xl">Group Chat</span>
            </div>
            {groups.map((group) => {
                return (
                    <div className="flex p-4">
                        <img
                            className=" h-8 w-8 rounded-full"
                            src={group.groupIcon}
                            alt=""
                        />
                        <div className="space-y-2">
                            <span className='font-bold'>{group.title}</span>
                            <span>{group.description}</span>
                        </div>
                    </div>
                )
            })}
        </aside>
    )
}

export default Sidebar
