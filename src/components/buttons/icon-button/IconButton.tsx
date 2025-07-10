import { FC, PropsWithChildren, ReactNode } from 'react'
import IconButtonActiveOverlay from './IconButtonActiveOverlay'
import IconButtonContainer from './IconButtonContainer'

const IconButton: FC<PropsWithChildren<{ icon?: ReactNode, isBadge?: boolean, isActive?: boolean, onClick?: () => void }>> = ({ icon, isBadge, isActive, onClick }) => {
    return (
        <IconButtonContainer className='relative h-10 w-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300' onClick={onClick} >

            {isActive ? <div className='absolute w-full h-full bottom-0 left-0 right-0 top-0 flex items-center justify-center scale-110'>
                <IconButtonActiveOverlay />
            </div> : null}

            {isBadge ? <div className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 flex items-center justify-center">
            </div> : null}

            {icon ? <div className='relative'>{icon}</div> : null}
        </IconButtonContainer>
    )
}

export default IconButton