import Sidebar from './Sidebar'
import styles from '@/styles/Layout.module.css'

export default function Layout(props){
    return(
        <main className={styles.main}>
			<Sidebar />
            <div className={styles.content}>
                {props.children}
            </div>
		</main>
    )
}