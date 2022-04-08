import { useRef } from "react";
import { useEffect } from "react";

export default function ImageUploader({
    className = '',
    setImage,
    imagePreview,
    imagePreviewClassName = '',
    settingRef,
}) {
    const inputReference = useRef(null);
    useEffect(() => {
        if(!settingRef) {
            return;
        }
        settingRef(inputReference?.current);
    }, [inputReference?.current]);
    const openFileSelector = () => {
        inputReference?.current?.click();
    }
    const changeImage = () => {
        if(!inputReference?.current?.files?.length) {
            return;
        }
        const file = inputReference?.current?.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setImage({
                preview: fileReader.result,
                file
            });
        }
    }
    return (
        <div className={`imageUploaderContainer ${className}`} onClick={openFileSelector}>
            {imagePreview && (
                <div className="imagePreviewContainer">
                    <img
                        src={imagePreview}
                        alt='Selected Image Preview'
                        className={imagePreviewClassName}
                    />
                </div>
            )}
            <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                ref={inputReference}
                onChange={changeImage} 
            />
        </div>
    );
}