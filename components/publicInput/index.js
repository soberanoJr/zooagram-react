import Image from "next/image";

export default function PublicInput ({
    image,
    type,
    placeholder,
    value = "",
    validationMessage = "",
    showValidationMessage = false,
    onChange,
}) {
    return (
        <div className="publicInputContainer">
            <div className="publicInput">
                <Image 
                    src={image}
                    alt="image"
                    className="publicInputIcon"
                    width={20}
                    height={20}
                />
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {showValidationMessage && <p className="validationMessage">{validationMessage}</p>}
        </div>
    );
}