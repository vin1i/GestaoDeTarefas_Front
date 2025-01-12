'use client';

import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Importando ícones de olho
import styles from "../../app/Login/page.module.css"
import Link from "next/link";
interface AuthFormProps {
  onSubmit: (email: string, password: string, remember: boolean) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente

  useEffect(() => {
    setIsClient(true); // Após a hidratação, seta como verdadeiro
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email, password, remember); // Passa os dados para o componente pai
  };

  if (!isClient) {
    return null; // Previne a renderização no lado do servidor antes da hidratação
  }
    // Lógica de autenticação ou chamada para API aqui.
    // try {
    //     const response = await fetch("/api/auth/login", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(formData),
    //     });
  
    //     if (response.ok) {
    //       console.log("Login bem-sucedido!");
    //     } else {
    //       console.error("Erro ao fazer login.");
    //     }
    //   } catch (error) {
    //     console.error("Erro ao se conectar ao servidor:", error);
    //   }
    // };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label  className={styles.label} htmlFor="email">Email</label>
      <input  className={styles.input}  
        type="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Digite seu email" 
      />

      <label  className={styles.label} htmlFor="password">Password</label>
      <div className={styles.inputWrapper}>
        <input className={styles.input}
          type={passwordVisible ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className={styles.options}>
        <div className={styles.checkbox}>
        <input className={styles.input}  
          type="checkbox" 
          id="remember" 
          checked={remember} 
          onChange={() => setRemember(!remember)} 
        />
        <label  className={styles.label} htmlFor="remember"> Lembrar por 30 dias</label>
        </div>
        <Link href="#">Esqueceu sua senha?</Link>
      </div>

      <button className={styles.button} type="submit">Log In</button>
    </form>
  );
};

export default AuthForm;
