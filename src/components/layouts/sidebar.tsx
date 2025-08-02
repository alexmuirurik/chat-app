import Chats from "./chats"
import SidebarIcons from "./sidebaricons"

const Sidebar = () => {
    return (
        <aside className="flex gap-4 w-3/12 space-y-2 px-4">
            <SidebarIcons />
            <Chats />
        </aside>
    )
}

export default Sidebar
