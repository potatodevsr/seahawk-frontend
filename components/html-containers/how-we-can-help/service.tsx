import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
    h4: string
    p: string
}

export const Service: FC<Props> = ({ children, h4, p }) => {
    return (
        <div className='bg-white py-4 px-8  flex items-center'>
            {children}
            <div>
                <h4 className='text-2xl font-bold'>{h4}</h4>
                <p>{p}</p>
            </div>

        </div>
    )
}
