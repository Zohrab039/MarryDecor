import React from 'react'
import styles from './topbar.module.css'

export default function TopBar() {
    return (
        <section className={styles.top_bar_wrapper}>
            <div className={styles.top_bar}>
                <span className={styles.top_bar_text}>10% endirim əldə et!</span>
            </div>
        </section>
    )
}
