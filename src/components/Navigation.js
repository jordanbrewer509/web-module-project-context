import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
	const cartContext = useContext(CartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartContext.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
