import IconButton from '../../../components/buttons/icon-button'
import DarkSimpleContainer from '../../../components/container/DarkSimpleContainer'
import CryptoGemIcon from '../../../components/icons/CryptoGemIcon'
import ProgressBar from '../../../components/progress-bar'
import NotificationMenu from '../notification-menu'
import ProfileAvatar from './ProfileAvatar'

const ProfileHeader = () => {
    return (
        <DarkSimpleContainer>
            <div className='flex items-center justify-center gap-2 py-2'>
                <IconButton isActive={true} icon={<CryptoGemIcon />} />
                <span className='text-text-secondary font-semibold'>13/20 XP</span>
                <ProgressBar className='w-40' progress={50} />
                <NotificationMenu />
                <ProfileAvatar />
            </div>
        </DarkSimpleContainer>
    )
}

export default ProfileHeader