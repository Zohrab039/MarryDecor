import React from 'react'
import IconLoader from '../Utils/IconLoader'
import styles from './header.module.css'


export default function Header() {
    return (
        <section className={styles.header_wrapper}>
            <div className={styles.header_components}>
                <div className={styles.header}>
                    <span className={styles.header_logo}>Marry Decore</span>
                </div>
                <div className={styles.header}>
                    <span className={styles.header_nav}>
                        <span className={styles.header_nav_button}>Dəstlər</span>
                    </span>
                    <span className={styles.header_nav}>
                        <span className={styles.header_nav_button}>Güzgülər <span className={styles.header_nav_icon}><IconLoader icon="chevron_left" /></span></span>
                    </span>
                    <span className={styles.header_nav}>
                        <span className={styles.header_nav_button}>Çıraqlar <span className={styles.header_nav_icon}><IconLoader icon="chevron_left" /></span></span>
                    </span>
                    <span className={styles.header_nav}>
                        <span className={styles.header_nav_button}>Bel bağları <span className={styles.header_nav_icon}><IconLoader icon="chevron_left" /></span></span>
                    </span>
                    <span className={styles.header_nav}>
                        <span className={styles.header_nav_button}>Xonçalar</span>
                    </span>
                </div>
                <div className={styles.header}>
                    <span className={styles.header_button}>
                        <span className={styles.header_button_icon}><IconLoader icon="favorite" /></span>
                    </span>
                    <span className={styles.header_button}>
                        <span className={styles.header_button_icon}><IconLoader icon="shopping_bag" /></span>
                    </span>
                    <span className={styles.header_button}>
                        <span className={styles.header_button_icon}><IconLoader icon="person" />
                            <span className={styles.header_button_text}>Hesab</span>
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}
