'use client';
import { toast } from "react-toastify";
import styles from "./page.module.css";
import Image from "next/image";
import GoogleIcon from "../../../public/assets/google-logo.png";
import loginImage from "../../../public/assets/LoginImage.png";
import starImage from "../../../public/assets/star.png";
import Link from "next/link";
import RegisterForm from "@/components/AuthForm/RegisterForm";
import { useEffect, useState } from "react";
const Register: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true); // Garantir que a renderização ocorre apenas no cliente
    }, []);
  
    const handleRegister = (email: string, password: string, confirmPassword: string, name: string) => {
      if (password !== confirmPassword) {
        toast.error("As senhas não coincidem.");
        return;
      }
  
      console.log("Email:", email);
      console.log("Senha:", password);
      console.log("Nome:", name);
  
      toast.success("Cadastro realizado com sucesso!");
    };
  
    if (!isClient) return null; // Ou pode retornar um loading, caso deseje
  
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

                <RegisterForm onSubmit={handleRegister} />

                <div className={styles.googleLogin}>
                    <Image src={GoogleIcon} alt="Google Icon" />
                    <span>Registrar com Google</span>
                </div>

                <div className={styles.options}>
                    <Link  href="Login">Já possui uma conta? <span className={styles.link}>Faça login</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
