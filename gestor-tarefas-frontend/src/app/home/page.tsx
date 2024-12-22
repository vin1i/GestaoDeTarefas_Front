import styles from "./page.module.css";
import { FaUserCircle, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        
        <div className={styles.logo}>LOGO</div>
        <nav>
          <ul>
            <li>Favoritos</li>
            <li>Tarefas</li>
            <li>Projetos</li>
            <li>Grupos</li>
            <li>Categorias</li>
            <li>Comentários</li>
            <li>Adicionar</li>
            <li>Ajustes</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>
        {/* Barra superior */}
        <header className={styles.header}>
          <input type="text" placeholder="Buscar tarefa" className={styles.searchBar} />
          <select className={styles.filter}>
    <option value="all">Todas</option>
    <option value="completed">Concluídas</option>
    <option value="pending">Pendentes</option>
  </select>
          <div className={styles.userInfo}>
            <FaCheckCircle className={styles.icon} />
            <span>Nome do usuário</span>
            <FaUserCircle className={styles.icon} />
          </div>
        </header>

        {/* Tarefas recentes */}
        <section>
          <h2>RECENTES</h2>
          <div className={styles.taskGrid}>
            {/* Card de tarefa */}
            <div className={styles.taskCard}>
              <div className={styles.taskHeader}>
                <FaUserCircle className={styles.icon} />
                <FaCalendarAlt className={styles.icon} />
              </div>
              <div className={styles.taskBody}>
                <h3>Título</h3>
                <p>Descrição</p>
              </div>
              <FaCheckCircle className={styles.taskStatus} />
            </div>
            {/* Adicione mais cards aqui */}
          </div>
        </section>
      </main>
    </div>
  );
}
