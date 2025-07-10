import AvatarBadgeIcon from '../../../components/icons/AvatarBadgeIcon'
import AvatarIcon from '../../../components/icons/AvatarIcon'

const ProfileAvatar = () => {
    return (
        <div className='relative h-10 w-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300'>
            <AvatarIcon />
            <div className='absolute -top-2 -right-2 h-6 w-6'>
                <AvatarBadgeIcon />
            </div>
        </div>
    )
}

export default ProfileAvatar