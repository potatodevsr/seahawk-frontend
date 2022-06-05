import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}
export const Button: FC<Props> = ({ children, className }) => {
  return (
    <button className={clsx(className, 'text-white max-h-[44px]')}>{children}</button>
  )
}
