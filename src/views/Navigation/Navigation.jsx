import React, { Component } from "react";
import CSSTransition from 'react-transition-group/CSSTransition';
import widthScreen from '../../hoc/widthScreen'

import NavigationLinks from "../../components/NavigationLinks";
import Logo from "../../components/Logo";
import HamburgerIcon from "../../components/HamburgerIcon";
import styles from "./styles.module.scss";


export class Navigation extends Component {
	state = {
		showNavigation: false,
		items: [
			{
				label: "главная",
				to: "home",
				active: true
			},
			{
				label: "продукты",
				to: "products",
				active: ''
			},
			{
				label: "о нас",
				to: "aboutUs",
				active: ''
			},
			{
				label: "мы здесь",
				to: "map",
				active: ''
			},
			{
				label: "контакты",
				to: "contacts",
				active: ''
			}
		]
	}

	handleMenuBarToggle = () => {
		this.setState(prevState => ({ showNavigation: !prevState.showNavigation }));
	}
	closeNavigation = () => {
		this.setState({ showNavigation: false });
	}
	componentDidMount() {
		window.addEventListener("resize", this.closeNavigation);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.closeNavigation);
	}

	handleSetActive = (to) => {
		const items = [ ...this.state.items ]
		items.forEach(item => item.active = "")
		const itemIndex = items.findIndex(item => item.to === to)
		items[itemIndex].active = true
		this.setState({items})
	}

	render() {

		const isMobile = this.props.screen.mdDown
		const { showNavigation, items } = this.state;

		return (
			<div className={`${styles.Block}`}>
				<div className={`${styles.Container}`}>
					<div className={`${styles.LogoBox} `}>
						{!showNavigation && <Logo />}
					</div>

					{!isMobile
						&& <NavigationLinks items={items} onSetActive={this.handleSetActive}/>
					}

				</div>

				{isMobile
					&& <HamburgerIcon active={showNavigation} onClicked={this.handleMenuBarToggle} className={styles.HamburgerIcon} />}


				<CSSTransition
					in={showNavigation}
					timeout={400}
					mountOnEnter
					unmountOnExit
					classNames={{
						enter: styles['FadeOut-enter'],
						enterActive: styles['FadeOut-enter-active'],
						exitActive: styles['FadeOut-exit-active'],
					}}>
					<div className={`${styles.Backdrop}`}>
						<NavigationLinks
							items={items}
							view="murky"
							className={` ${styles.Navigation} `} 
							onSetActive={this.handleSetActive}
							click={this.closeNavigation}/>
					</div>
				</CSSTransition>

			</div>
		);
	}
}

export default widthScreen(Navigation);
