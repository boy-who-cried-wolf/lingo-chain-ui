import React, { FC, PropsWithChildren, ReactNode } from 'react'
import LightSimpleContainer from '../../container/LightSimpleContainer'
import NotificationIcon from '../../icons/NotificationIcon'

const IconButton: FC<PropsWithChildren<{ icon?: ReactNode, isBadge?: boolean, onClick?: () => void }>> = ({ icon, isBadge, onClick }) => {
    return (
        <LightSimpleContainer className='h-10 w-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300' onClick={onClick}   >
            <div className="relative">
                {icon ?? <NotificationIcon />}

                {isBadge ? <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 flex items-center justify-center">
                </div> : null}
            </div>
        </LightSimpleContainer>
    )
}

export default IconButton