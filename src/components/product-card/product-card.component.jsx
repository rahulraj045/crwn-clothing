import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CustomButton, {BUTTON_TYPES} from '../custom-button/custom-button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CustomButton
        buttonType={BUTTON_TYPES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </CustomButton>
    </ProductCartContainer>
  );
};

export default ProductCard;