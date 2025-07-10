import DarkSimpleContainer from '../../../components/container/DarkSimpleContainer'
import NotificationMenu from '../notification-menu'
import ProfileAvatar from './ProfileAvatar'

const ProfileHeader = () => {
    return (
        <DarkSimpleContainer>
            <div className='flex items-center gap-2 p-1'>
                <span className='text-text-primary font-semibold capitalize'>John Doe</span>
                <span className='flex items-center justify-center gap-1'>
                    <NotificationMenu />
                    <ProfileAvatar />
                </span>
            </div>
        </DarkSimpleContainer>
    )
}

export default ProfileHeader