import { useState } from "react";
import Button from "../../components/button"
import Image from "next/image";
import Link from "next/link";
import PublicInput from "../../components/publicInput";
import ImageUploader from "../../components/imageUploader"

import { nameValidator, emailValidator, passwordValidator, passwordConfirmationValidator } from '../../utils/validators'
import key from "../../public/images/key.svg"
import logo from "../../public/images/zebra.png"
import mail from "../../public/images/mail.svg"
import no_photo from "../../public/images/no_photo.svg"
import user_active from "../../public/images/user_active.svg"
import zooagram from "../../public/images/zooagram.png"

export default function Register() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const formValidation = () => {
        return (
            emailValidator(email) && 
            passwordValidator(password) &&
            passwordConfirmationValidator(password, passwordConfirmation)
        )
    } 

    return (
        <section className={`registerSection publicPage`}>
            <div className="logoContainer desktop">
                <Image 
                    src={logo}
                    alt="zooagram"
                    layout="responsive" //"fill"
                    priority={true}
                />
                <div className="zooagram">
                    <Image 
                        src={zooagram}
                        alt="zooagram"
                        layout="responsive"
                        priority={true}
                    />
                </div>
            </div>
            <div className="publicPageContent">
                <form>
                    <ImageUploader 
                        imagePreviewClassName="avatar avatarPreview"
                        imagePreview={image?.preview || no_photo.src} 
                        setImage={setImage}
                    />
                    <PublicInput 
                        image={user_active}
                        placeholder="Name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        validationMessage="Too short."
                        showValidationMessage={name && !nameValidator(name)}
                    />
                    <PublicInput 
                        image={mail}
                        placeholder="E-mail"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        validationMessage="Invalid e-mail address."
                        showValidationMessage={email && !emailValidator(email)}
                    />
                    <PublicInput 
                        image={key}
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        validationMessage="Too short"
                        showValidationMessage={password && !passwordValidator(password)}

                    />
                    <PublicInput 
                        image={key}
                        placeholder="Password Confirmation"
                        type="password"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}
                        validationMessage="Passwords must match."
                        showValidationMessage={passwordConfirmation && !passwordConfirmationValidator(password, passwordConfirmation)}
                    />
                    <Button 
                        text="Register"
                        type="submit"
                        disabled={!formValidation()}
                    />
                </form>
                <div className="publicPageFooter">
                    <p>Already registered? <Link href="/">Login.</Link></p>
                </div>
            </div>

        </section>
    );
}