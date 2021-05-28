import { ReactNode } from "react";
import ProductCard from "../ProductCard";

import styles from "./styles.module.scss";

interface ShopContainerProps {
	children?: ReactNode;
}

function ShopContainer({ children }: ShopContainerProps) {
	return (
		<div className={styles.shopContainer}>
			<div className={styles.productPanel}>
				<div className={styles.headContainer}>
					<div className={styles.breadCrumbs}></div>
					<div className={styles.title}></div>
					<div className={styles.results}></div>
				</div>
				<div className={styles.productShowcase}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</div>
	);
}

export default ShopContainer;
