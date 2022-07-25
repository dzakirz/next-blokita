import React from "react"
import Image from "next/image"

const ProfileCard = () => {
    return (
        <div className="bg-gray-100 col-pan-1 xl:col-span-2 shadow-lg p-6 rounded-lg flex flex-col items-center gap-5">
            <Image
                src="/avatar.jpg"
                alt="avatar"
                width="150"
                height="150"
                layout="fixed"
                className="border-2 border-primary"
            />
            <h1 className="text-xl font-semibold">Dzaki Rozaan</h1>
        </div>
    )
}

export default ProfileCard
