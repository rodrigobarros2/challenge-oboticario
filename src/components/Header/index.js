import React from 'react';
import * as S from './styles';
import Cart from '../../assets/icon/shoping-cart.svg';

function Header() {
	return (
		<>
			<S.Container>
				<S.Content>
					<h5>minha loja</h5>
					<ul>
						<li>perfumaria</li>
						<li>maquiagem</li>
						<li>cabelos</li>
						<li>infatil</li>
					</ul>
					<img src={Cart} alt="Cart" />
				</S.Content>
			</S.Container>
		</>
	);
}

export default Header;
