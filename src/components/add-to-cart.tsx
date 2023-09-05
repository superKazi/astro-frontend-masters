/** @jsxImportSource react */

import { addItemToCart } from '../stores/cart';

export const AddToCart = ({ item }: { item: ShopItem }) => {
	<button className="big-link" onClick={() => addItemToCart(item)}>
		Add to Cart
	</button>;
};
