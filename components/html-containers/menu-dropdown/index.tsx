import clsx from 'clsx'
import React, { MouseEvent, useRef, useState } from 'react'

export const MenuDropdown = ({ menuElement }) => {
    const [isOpenit, setIsOpenit] = useState(false)
    const DROPDOWN = useRef(null);
    function openDropdown(event: any) {
        const condition = event.target.isSameNode(DROPDOWN?.current) || DROPDOWN?.current.contains(event.target)
        if (condition) return
        setIsOpenit(true)
    }
    console.log('menuElement', menuElement)
    function closeDropdown() {
        setIsOpenit(false)
    }
    return (
        <div className='group relative' onMouseLeave={closeDropdown} onMouseOver={openDropdown}>
            <div className='px-4 py-2 font-bold' >{menuElement?.link_text}</div>

            <div ref={DROPDOWN} className={clsx(
                isOpenit ? 'opacity-100' : 'opacity-0',
                'animated py-3 absolute bg-yellow-500 rounded-md top-full')}>
                <ul>
                    {menuElement?.submenu.map(({ link_text, link_href }, index) => {
                        return (
                            <li className='px-8 py-2 font-bold whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 animated'>{link_text}</li>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}
