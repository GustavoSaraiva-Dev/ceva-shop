import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface BreadcrumbsProps {
	children?: ReactNode;
}

function Breadcrumbs({ children }: BreadcrumbsProps) {
	return (
		<div className={styles.breadCrumbsWrapper}>
			<span> Home </span>
			<span> {">"} </span>
			<span> Roupas </span>
			<span> {">"} </span>
			<span> Camisetas </span>
		</div>
	);
}

export default Breadcrumbs;
