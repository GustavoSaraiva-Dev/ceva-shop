import { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode } from "react";
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
		<>
			<h1>Products</h1>
			{product.description}
		</>
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
