"use client";
import { FaStar, FaTasks, FaProjectDiagram, FaUsers, FaHome } from "react-icons/fa";
import Link from "next/link";
import styles from "./BottomBar.module.css";
import { useEffect, useState } from "react";

const BottomBar: React.FC = () => {

  

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Garantir que o código seja executado no cliente
  }, []);

  if (!isClient) {
    return null; // Ou pode retornar um loading ou algo enquanto a hidratação não acontece
  }
  return (
    <div className={styles.bottomBar}>
        <Link href="/" className={styles.iconContainer}>
        <FaHome className={styles.icon} title="Início" />
        <span className={styles.iconLabel}>Início</span>
      </Link>
      <Link href="/favoritos" className={styles.iconContainer}>
        <FaStar className={styles.icon} title="Favoritos" />
        <span className={styles.iconLabel}>Favoritos</span>
      </Link>
      <div className={styles.iconContainer}>
        <FaTasks className={styles.icon} title="Tarefas" />
        <span className={styles.iconLabel}>Tarefas</span>
      </div>
      <div className={styles.iconContainer}>
        <FaProjectDiagram className={styles.icon} title="Projetos" />
        <span className={styles.iconLabel}>Projetos</span>
      </div>
      <div className={styles.iconContainer}>
        <FaUsers className={styles.icon} title="Grupos" />
        <span className={styles.iconLabel}>Grupos</span>
      </div>
    
    </div>
  );
};

export default BottomBar;
