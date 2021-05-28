import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface ProductCardProps {
	children?: ReactNode;
}

function ProductCard({ children }: ProductCardProps) {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardHeader}></div>
			<div className={styles.cardBody}></div>
		</div>
	);
}

export default ProductCard;
