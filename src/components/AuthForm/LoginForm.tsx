'use client';

import { useEffect, useState } from "react";  // Importando useEffect e useState
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Importando ícones de olho
import styles from "../../app/Login/page.module.css"
import Link from "next/link";

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void; // Removido 'remember' do tipo
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente

  useEffect(() => {
    setIsClient(true); // Após a hidratação, seta como verdadeiro
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email, password); // Passa os dados para o componente pai
  };

  if (!isClient) {
    return null; // Previne a renderização no lado do servidor antes da hidratação
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.input}  
        type="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Digite seu email" 
      />

      <label className={styles.label} htmlFor="password">Password</label>
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
        <Link href="#">Esqueceu sua senha?</Link>
      </div>

      <button className={styles.button} type="submit">Log In</button>

    </form>
  );
};

export default AuthForm;
