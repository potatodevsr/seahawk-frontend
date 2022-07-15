import React, { FC, ReactNode } from 'react'

interface Props {
    icon: ReactNode
    h4: string
    p: string
}

export const Service: FC<Props> = ({ icon, h4, p }) => {
    console.log('icon', icon)
    return (
        <div className='bg-white py-4 px-8  flex items-center'>
            <img src={"http://localhost:1337" + icon?.data?.attributes.url} alt={h4}  mr-80 />
            <div>
                <h4 className='text-2xl font-bold'>{h4}</h4>
                <p>{p}</p>
            </div>

        </div>
    )
}
