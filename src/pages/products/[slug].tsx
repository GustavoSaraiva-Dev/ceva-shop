import { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode } from "react";
import { converterMoeda } from "../../utils/facilities";
import { api } from "../api/server";

import styles from "./styles.module.scss";

interface ProductsProps {
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

function Products({ product }: ProductsProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.details}>
				<div className={styles.gallery}>
					<div className={styles.container}>
						<div className={styles.currentPhoto}>
							<div className={styles.imageWrapper}>
								<img src={product.image} alt={product.title} />
							</div>
						</div>
						<div className={styles.photoGallery}>
							<div className={styles.thumb}>
								<button></button>
							</div>
							<div className={styles.thumb}>
								<button></button>
							</div>
							<div className={styles.thumb}>
								<button></button>
							</div>
							<div className={styles.thumb}>
								<button></button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.info}>
					<h2 className={styles.title}> {product.title}</h2>
					<p className={styles.trade}>Lacoste</p>
					<div className={styles.priceAndDiscount}>
						<div className={styles.priceContainer}>
							<span className={styles.currency}>R$</span>
							<span className={styles.value}>
								{parseFloat(product.price).toLocaleString("pt-br", {
									minimumFractionDigits: 2,
								})}
							</span>
						</div>
						<div className={styles.disountContainer}>
							<p className={styles.discount}> 7,90</p>
							<p className={styles.discountInfo}>
								{" "}
								Valore de impostos não inclusos
							</p>
						</div>
					</div>
					<p className={styles.description}>{product.description}</p>
					<div className={styles.purchaseContainer}>
						<div className={styles.amountGroup}>
							<div className={styles.quantityText}>QTD</div>
							<select name='quantity' id='' className={styles.quantityValue}>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
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
									d='M8 9l4-4 4 4m0 6l-4 4-4-4'
								/>
							</svg>
						</div>
						<button className={styles.button} type='button'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await api.get<Array<Product>>("products", {
		params: {
			limit: 3,
		},
	});

	const paths = data.map((product) => {
		return {
			params: {
				slug: product.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params;
	const { data: product } = await api.get<Product>(`products/${slug}`);

	return {
		props: {
			product,
		},
		revalidate: 60 * 60, //1 hour
	};
};
