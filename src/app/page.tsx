import styles from "./page.module.css";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaCheckCircle,
  FaFilter,
  FaStar,
  FaTasks,
  FaProjectDiagram,
  FaUsers,
  FaComments,
  FaPlusCircle,
  FaCog,
  FaTags,
 
} from "react-icons/fa";
import Link from "next/link";
import ClientUserInfo from "@/components/UserInfo/ClientUserInfo";

export default function Home() {

  return (

    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>LOGO</div>
        <nav>
          <ul>
            <li><Link href="favoritos"><span className={styles.icon}><FaStar /></span> Favoritos</Link></li>
            <li><span className={styles.icon}><FaTasks /></span> Tarefas</li>
            <li><span className={styles.icon}><FaProjectDiagram /></span> Projetos</li>
            <li><span className={styles.icon}><FaUsers /></span> Grupos</li>
            <li><span className={styles.icon}><FaTags /></span> Categorias</li>
            <li><span className={styles.icon}><FaComments /></span> Comentários</li>
          </ul>
          <hr className={styles.divider} />
          <ul className={styles.lowerSection}>
            <li><span className={styles.icon}><FaPlusCircle /></span> Adicionar</li>
            <li><span className={styles.icon}><FaCog /></span> Ajustes</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>

        {/* Barra superior */}
        <header className={styles.header}>
          <div className={styles.searchContainer}>
          <input type="text" placeholder="Buscar tarefa" className={styles.searchBar} /></div>
          <div className={styles.filterContainer}>
            <FaFilter className={styles.filterIcon} />
            <select className={styles.filter}>
              <option value="all">Todas</option>
              <option value="completed">Concluídas</option>
              <option value="pending">Pendentes</option>
            </select>
            
          </div>
          <ClientUserInfo/>
        </header>

        {/* Tarefas recentes */}
        <section>
          <h2>RECENTES</h2>
          <div className={styles.taskGrid}>
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
          </div>
        </section>
      </main>
    </div>
  );
}
