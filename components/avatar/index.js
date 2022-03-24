import noPhoto from '../../public/images/no_photo.svg';

export default function Avatar({src}) {
    const getAvatar = () => {
        if (src && src !== 'undefined') {
            return src;
        }
        return noPhoto.src;
    }
    return (
        <img
            src={getAvatar()}
            alt='Avatar'
            className='avatar'
        />
    );
}