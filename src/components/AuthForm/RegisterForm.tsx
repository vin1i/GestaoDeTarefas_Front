'use client';

import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../../app/Login/page.module.css";
import { toast } from "react-toastify";

interface RegisterFormProps {
  onSubmit: (email: string, password: string, confirmPassword: string, name: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [isClient, setIsClient] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => { 
    setIsClient(true);

  }, []);
  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(prev => !prev);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }
    onSubmit(email, password, confirmPassword, name); // Passa os dados para o componente pai
  };

  if (!isClient) { 
    return null;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="nome">Nome</label>
      <input className={styles.input} 
        type="text" 
        id="nome" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Digite seu nome" 
      />

      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.input} 
        type="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Digite seu email" 
      />

      <label className={styles.label} htmlFor="password">Senha</label>
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

      <label className={styles.label} htmlFor="confirmPassword">Confirme sua Senha</label>
      <div className={styles.inputWrapper}>
        <input className={styles.input}
          type={confirmPasswordVisible ? "text" : "password"}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirme sua senha"
        />
        <span className={styles.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
          {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button className={styles.button} type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
