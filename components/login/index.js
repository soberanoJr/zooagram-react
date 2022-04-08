import { useState } from "react";
import Button from "../../components/button"
import Image from "next/image";
import Link from "next/link";
import PublicInput from "../publicInput";

import { emailValidator, passwordValidator } from '../../utils/validators'
import key from "../../public/images/key.svg"
import logo from "../../public/images/zebra.png"
import mail from "../../public/images/mail.svg"
import zooagram from "../../public/images/zooagram.png"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const formValidation = () => {
        return (
            emailValidator(email) && 
            passwordValidator(password)
        )
    } 

    return (
        <section className={`loginSection publicPage`}>
            <div className="logoContainer">
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
                    <Button 
                        text="Login"
                        type="submit"
                        disabled={!formValidation()}
                    />
                </form>
                <div className="publicPageFooter">
                    <p>New user? <Link href="/register">Register now.</Link></p>
                </div>
            </div>

        </section>
    );
}