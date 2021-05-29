import { ReactNode } from "react";
import Link from "next/link";
import { converterMoeda } from "../../utils/facilities";

import styles from "./styles.module.scss";

interface ProductCardProps {
	children?: ReactNode;
	product: Product;
}

type Product = {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
};

function ProductCard({ children, product }: ProductCardProps) {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardHeader}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
					/>
				</svg>
			</div>
			<div className={styles.cardBody}>
				<Link href={`products/${product.id}`}>
					<img src={product.image} alt='Product Image' />
				</Link>
				<p className={styles.title}>{product.title}</p>
				<span className={styles.price}>
					{converterMoeda(product.price, "BRL")}
				</span>
			</div>
		</div>
	);
}

export default ProductCard;
