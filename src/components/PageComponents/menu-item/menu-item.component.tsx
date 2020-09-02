/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React /* , { useContext } */ from 'react';
import './menu-items.styles.scss';
/* import { ThemeContext } from 'styled-components';
 */
interface MenuInterface {
	title: string,
	img: any
}

function MenuItem({ title, img }: MenuInterface) {
	return (
		<>
			<div
				className="menu-item"
				style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					/* height: '100vh', */
					color: '#FFFF',
				}}
			/>

			<div className="content">
				<h1 className="title">
					{title}
				</h1>
				<span className="subtitle"> SHOP NOW </span>
			</div>
		</>
	);
}

export default MenuItem;
