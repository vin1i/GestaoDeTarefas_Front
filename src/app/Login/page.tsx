'use client';

import { useEffect, useState } from "react"; // Importando useEffect e useState
import styles from "./page.module.css";
import Image from "next/image";
import loginImage from "../../../public/assets/LoginImage.png";
import starImage from "../../../public/assets/star.png";  
import GoogleIcon from "../../../public/assets/google-logo.png";
import LoginForm from "@/components/AuthForm/LoginForm";  
import Link from "next/link";

const Login: React.FC = () => {
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente

  useEffect(() => {
    setIsClient(true); // Após a hidratação, seta como verdadeiro
  }, []);

  const handleLogin = (email: string, password: string,) => {
    console.log("Email:", email);
    console.log("Password:", password);
    
  };

  if (!isClient) {
    return null; // Previne a renderização no lado do servidor antes da hidratação
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src={loginImage} alt="Login Image"/>
      </div>

      <div className={styles.formSection}>
        <div className={styles.starContainer}>
          <Image src={starImage} alt="Estrela" className={styles.starImage} />
        </div>

        <h1>Bem Vindo de Volta!</h1>
        <p>Preencha com seus dados!</p>

        <LoginForm onSubmit={handleLogin} />

        <div className={styles.googleLogin}>
          <Image src={GoogleIcon} alt="Google Icon" />
          <span> Log In com Google</span>
        </div>

        <div className={styles.options}>
                    <Link href="cadastro">Não tem uma conta? <span className={styles.link}>Crie uma agora!</span></Link>
                </div>
      </div>
    </div>
  );
};

export default Login;
