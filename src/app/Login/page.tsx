'use client';

import styles from "./page.module.css";
import Image from "next/image";
import loginImage from "../../../public/assets/LoginImage.png";
import starImage from "../../../public/assets/star.png";  // Imagem da estrela
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Importando ícones de olho
import Link from "next/link";
const Login: React.FC = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    return (
        <div className={styles.container}>
            {/* Área da imagem */}
            <div className={styles.imageSection}>
                <Image src={loginImage} alt="Login Image"/>
            </div>

            {/* Área do formulário */}
            <div className={styles.formSection}>
                {/* Imagem da estrela acima do título */}
                <div className={styles.starContainer}>
                    <Image src={starImage} alt="Estrela" className={styles.starImage} />
                </div>

                <h1>Bem Vindo de Volta!</h1>
                <p>Preencha com seus dados!</p>

                <form className={styles.form} action={""}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id="email" placeholder="Digite seu email"/>

                    <label className={styles.label} htmlFor="password">Password</label>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            placeholder="Digite sua senha"
                        />
                        <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className={styles.options}>
                        <div className={styles.checkbox}>
                            <input className={styles.input} type="checkbox" id="remember"/>
                            <label htmlFor="remember"> Lembrar por 30 dias</label>
                        </div>

                        <Link href="#">Esqueceu sua senha?</Link>
                    </div>

                    <button className={styles.button} type="submit">Log In</button>
                </form>

                <div className={styles.googleLogin}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" />
                    <span> Log In com Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;