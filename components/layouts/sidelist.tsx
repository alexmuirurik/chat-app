import { peoplesList } from "@/lib/templatelists"

const Sidelist = () => {
    return (
        <>
            {
                peoplesList.map((person) =>
                    <div className={person.status + " person flex items-center [&.active]:bg-[#2a3942] hover:bg-[#2a3942] cursor-pointer"}>
                        <div className="avatar w-12 mx-3 py-3">
                            <img src={person.profileimg} alt="" className='rounded-full w-full' />
                        </div>
                        <div className="relative flex items-center border-b border-[#263239] bottom-0 py-3 w-full">
                            <div className="names">
                                <h4 className='text-gray-300 text-sm font-semibold'>{person.name}</h4>
                                <p className='text-gray-300 text-xs'>{person.message}</p>
                            </div>
                            <div className="time flex self-start ms-auto pe-4">
                                <span className='text-gray-400 text-xs'>{person.time}</span>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default Sidelist