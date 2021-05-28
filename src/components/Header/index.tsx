import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface HeaderProps {
	children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.logo}>
				<img src='assets/logo.png' alt='Website Logo' />
			</div>
			<div className={styles.menu}>
				<span>Home</span>
				<span className={styles.active}>Shop</span>
				<span>Blog</span>
				<span>Contact</span>
			</div>
			<div className={styles.cart}></div>
		</div>
	);
}
