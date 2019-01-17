import React from "react";

import styles from "./styles.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";


const Links = props => {
	const { 
			view, 
			className, 
			style, 
			items,
			onSetActive,
			click
		} = props;

	return (
		<div className={`${styles.NavigationLinks} ${className}`} style={style}>
			{items.map((item, index) => {
				return <NavigationLink 
					label={item.label} 
					active={item.active} 
					onSetActive={onSetActive} 
					to={item.to} 
					key={index} 
					view={view}
					click={click}
					/>;
					
			})}
		</div>
	);
};

export default Links;
