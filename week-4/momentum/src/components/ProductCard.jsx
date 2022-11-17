import PropTypes from 'prop-types';

const ProductCard = ({ id, nameI18n, image, name, description }) => {
  return (
    <div id={`product${id}`} className="product-card">
      <div className="flex-1">
        <img src={image} alt={name} className="product-card-image" />
      </div>
      <div className="product-card-text">
        <div>
          제품명 Product Name ${nameI18n} ${name}
        </div>
        <div className="product-card-description">
          설명 Description <br /> ${description}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  nameI18n: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};

export default ProductCard;
