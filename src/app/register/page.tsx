'use client';

import styles from "./page.module.css";
import Image from "next/image";
import loginImage from "../../../public/assets/LoginImage.png";
import starImage from "../../../public/assets/star.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
const Register: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setPasswordVisible(prev => !prev);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(prev => !prev);

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <Image src={loginImage} alt="Register Image"/>
            </div>

            <div className={styles.formSection}>
                <div className={styles.starContainer}>
                    <Image src={starImage} alt="Estrela" className={styles.starImage} />
                </div>

                <h1>Crie sua Conta!</h1>
                <p>Preencha os campos abaixo para começar!</p>

                <form className={styles.form} action={""}>
                    <label className={styles.label} htmlFor="nome">Nome</label>
                    <input className={styles.input} type="text" id="nome" placeholder="Digite seu nome"/>

                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id="email" placeholder="Digite seu email"/>

                    <label className={styles.label} htmlFor="password">Senha</label>
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

                    <label className={styles.label} htmlFor="confirmPassword">Confirme sua Senha</label>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            type={confirmPasswordVisible ? "text" : "password"}
                            id="confirmPassword"
                            placeholder="Confirme sua senha"
                        />
                        <span className={styles.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button className={styles.button} type="submit">Registrar</button>
                </form>

                <div className={styles.googleLogin}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" />
                    <span>Registrar com Google</span>
                </div>

                <div className={styles.options}>
                    <Link href="Login">Já possui uma conta? Faça login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
