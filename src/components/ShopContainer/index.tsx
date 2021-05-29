import { ReactNode } from "react";
import ProductCard from "../ProductCard";

import styles from "./styles.module.scss";

interface ShopContainerProps {
	children?: ReactNode;
	products: Array<Product>;
}

type Product = {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
};

function ShopContainer({ children, products }: ShopContainerProps) {
	return (
		<div className={styles.shopContainer}>
			<div className={styles.productPanel}>
				<div className={styles.headContainer}>
					<div className={styles.breadCrumbs}></div>
					<div className={styles.title}></div>
					<div className={styles.results}></div>
				</div>
				<div className={styles.productShowcase}>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ShopContainer;
