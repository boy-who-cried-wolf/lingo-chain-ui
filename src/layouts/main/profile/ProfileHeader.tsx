import DarkSimpleContainer from '../../../components/container/DarkSimpleContainer'
import ProgressBar from '../../../components/progress-bar'
import NotificationMenu from '../notification-menu'
import ProfileAvatar from './ProfileAvatar'

const ProfileHeader = () => {
    return (
        <DarkSimpleContainer>
            <div className='flex items-center gap-2 p-1'>
                <span className='text-text-primary font-semibold capitalize'>John Doe</span>
                <div className='flex items-center justify-center gap-1'>
                    <ProgressBar className='w-40' progress={50} />
                    <NotificationMenu />
                    <ProfileAvatar />
                </div>
            </div>
        </DarkSimpleContainer>
    )
}

export default ProfileHeader