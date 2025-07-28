import styles from './Button.module.css'
export default function Button({ children, variant = 'primary' }) 
{
    return (
       <button className={`${styles.button} ${styles[variant]}`}>
			{children}
		</button>
    )
}