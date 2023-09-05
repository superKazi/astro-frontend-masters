import { useStore } from '@nanostores/solid';
import { Show, createSignal } from 'solid-js';
import { $cart, removeItemFromCart, subtotal } from '../stores/cart';
import styles from './cart.module.css';

function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-us', {
		currency: 'usd',
		style: 'currency',
	}).format(amount);
}
