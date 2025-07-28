import styles from './style.module.css';
export default function Input({ type = 'text', placeholder = 'Enter text' }) {
	return (
		<input type={type} placeholder={placeholder} className={styles.input} />
	)
}