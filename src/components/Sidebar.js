import styles from '@/styles/Sidebar.module.css'
import Link from 'next/link';
import { useRouter } from "next/router";

const navigationRoutes = ["home", "projects", "interests"];

export default function Sidebar(){
    const router = useRouter();
    return(
        <div className={styles.sideBar}>
            <ul>
                {navigationRoutes.map((singleRoute, index) => {
                    return (
                        <li key={index}>
                            <NavigationLink
                                href={`/${singleRoute}`}
                                text={singleRoute}
                                router={router}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} className={`${isActive && styles.active}`}>
            {capitalize(text)}
        </Link>
    );
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  