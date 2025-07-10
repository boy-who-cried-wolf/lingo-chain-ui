import LightSimpleContainer from '../../../components/container/LightSimpleContainer'
import NotificationIcon from '../../../components/icons/NotificationIcon'

const NotificationMenu = () => {
    return (
        <LightSimpleContainer className='h-10 w-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300'>
            <div className="relative">
                <NotificationIcon />

                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 flex items-center justify-center">
                </div>
            </div>
        </LightSimpleContainer>
    )
}

export default NotificationMenu