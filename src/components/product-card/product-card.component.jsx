import { useContext } from 'react';

import './product-card.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer '>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>    
            <CustomButton buttonType='inverted' onClick={addProductToCart} >Add to Cart</CustomButton>
        </div>
    )
}

export default ProductCard