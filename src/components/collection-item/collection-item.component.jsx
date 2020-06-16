import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomButton from 'components/custom-button/custom-button.component';
import { addItem } from 'modules/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

CollectionItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func
};

export default connect(null, mapDispatchToProps)(CollectionItem);
