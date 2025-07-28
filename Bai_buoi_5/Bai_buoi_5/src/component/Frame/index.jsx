import styles from './frame.module.css';
import Button from '../Button';
export default function Frame({ title,subtitle })
{
    return (
        <div className={styles.container}>
         <div className={styles.containerTitle}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
        <div>
            <button className={styles.button}>Edit</button>
        </div>
        </div>
       
    )
} 