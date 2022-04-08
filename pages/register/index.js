import { useState } from "react";
import Button from "../../components/button"
import Image from "next/image";
import Link from "next/link";
import PublicInput from "../../components/publicInput";
import ImageUploader from "../../components/imageUploader"

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
                    />
                    <PublicInput 
                        image={mail}
                        placeholder="E-mail"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <PublicInput 
                        image={key}
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <PublicInput 
                        image={key}
                        placeholder="Password Confirmation"
                        type="password"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}
                    />
                    <Button 
                        text="Register"
                        type="submit"
                        disabled={false}
                    />
                </form>
                <div className="publicPageFooter">
                    <p>Already registered? <Link href="/">Login.</Link></p>
                </div>
            </div>

        </section>
    );
}