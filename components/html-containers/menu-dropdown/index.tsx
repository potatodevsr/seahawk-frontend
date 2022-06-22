import clsx from 'clsx'
import React, { MouseEvent, useRef, useState } from 'react'

export const MenuDropdown = () => {
    const [isOpenit, setIsOpenit] = useState(false)
    const DROPDOWN = useRef(null);
    function openDropdown(event: any) {
        const condition = event.target.isSameNode(DROPDOWN?.current) || DROPDOWN?.current.contains(event.target)
        if (condition) return
        setIsOpenit(true)
    }
    function closeDropdown() {
        setIsOpenit(false)
    }
    return (
        <div className='group relative' onMouseLeave={closeDropdown} onMouseOver={openDropdown}>
            <div className='px-4 py-2 font-bold' >Home</div>

            <div ref={DROPDOWN} className={clsx(
                isOpenit ? 'opacity-100' : 'opacity-0',
                'animated py-3 absolute bg-yellow-500 rounded-md top-full')}>
                <ul>
                    <li className='px-8 py-2 font-bold whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 animated'>
                        Home 01
                    </li>
                    <li className='px-8 py-2 font-bold whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 animated'>
                        Home 02
                    </li>
                    <li className='px-8 py-2 font-bold whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 animated'>
                        Home 03
                    </li>
                    <li className='px-8 py-2 font-bold whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 animated'>
                        Home 04
                    </li>
                </ul>
            </div>
        </div>
    )
}
