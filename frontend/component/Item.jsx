import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { category, amount, detail } = props;
  return (
    <div>
      {category}
      {amount}
      {detail}
    </div>
  );
}

Item.propTypes = {
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  detail: PropTypes.string.isRequired,
};

export default Item;
