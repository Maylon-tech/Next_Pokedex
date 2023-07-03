import Link from "next/link";

import styles from '../styles/404NotFound.module.css'

export default function notFound() {
    return (
        <div className={styles.error}>
            <h1>404</h1>
            <h3>Parece que essa pagina nao existe!</h3>
            <Link href="/">
                Voltar
            </Link>
        </div>
    )
}