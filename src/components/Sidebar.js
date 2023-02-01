import styles from '@/styles/Sidebar.module.css'
import Link from 'next/link';

export default function Sidebar(){
    return(
        <div className={styles.sideBar}>
            <ul>
                <li className={styles.active}>Home</li>
                <li><Link href="/projects">Projects</Link></li>
                <li>Interests</li>
            </ul>
        </div>
    );
}