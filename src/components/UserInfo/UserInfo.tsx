"use client";
import {  useState } from "react";
import {  FaSignOutAlt,
    FaExchangeAlt,  FaUserCircle,
    FaCog,
} from "react-icons/fa";
import styles from "./UserInfo.module.css";
export default function UserInfo ()  { 

    
    const [userMenuVisible, setUserMenuVisible] = useState(false);

    const toggleUserMenu = () => {
      setUserMenuVisible(!userMenuVisible);
    }; 

    return  ( 
      <>
        <div className={styles.userInfo}>
        {/* <FaCheckCircle className={styles.icon} /> */}
        <span onClick={toggleUserMenu} className={styles.userName}>
          Nome do usuário
        </span>
        <FaUserCircle className={styles.icon} onClick={toggleUserMenu} />
      </div>

      
      {userMenuVisible && (
        <div className={styles.userMenu}>
          <ul>
            <li><FaSignOutAlt className={styles.icon} /> Sair</li>
            <li><FaExchangeAlt className={styles.icon} /> Trocar conta</li>
            <li><FaCog className={styles.icon} /> Ajustes</li>
            
           
          </ul>
        </div>
        
      ) }
      </>)
  
  }
