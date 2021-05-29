import axios from "axios";
import { GetStaticProps } from "next";
import styles from "../../styles/pages/home.module.scss";
import { Header } from "../components/Header";
import ShopContainer from "../components/ShopContainer";
import { api } from "./api/server";

type HomeProps = {
	products: [];
};

export default function Home({ products }: HomeProps) {
	return (
		<div>
			<ShopContainer products={products} />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: products } = await api.get("products");
	return {
		props: {
			products,
		},
		revalidate: 240,
	};
};
