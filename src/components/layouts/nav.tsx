import { Bell, Cog, Search } from 'lucide-react'
import { Input } from '../ui/input'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '../ui/menubar'
import { Avatar, AvatarImage } from '../ui/avatar'

const Nav = () => {
    return (
        <div className="flex items-center justify-between w-full py-2">
            <div className="title">
                <span className="text-3xl font-bold">ICC Chat</span>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <Input
                        className="bg-[#1a1a1a] placeholder:text-lg py-6 px-12 border-0 rounded-full"
                        placeholder="Search"
                    />
                    <div className="absolute flex items-center h-full p-2.5 top-0 z-30">
                        <Search className="" />
                    </div>
                </div>
                <Menubar className="border-0">
                    <MenubarMenu>
                        <MenubarTrigger className="bg-[#1a1a1a] py-4 px-4 border-0 rounded-full ">
                            <Cog />
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="bg-[#1a1a1a] py-4 px-4 border-0 rounded-full ">
                            <Bell />
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="bg-[#1a1a1a] border-0 rounded-full p-0">
                            <Avatar className='h-14 w-14' >
                                <AvatarImage src='https://avatars.githubusercontent.com/u/79818517?v=4' />
                            </Avatar>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    )
}

export default Nav
