import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CollectionsOverview from 'components/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.component';

import { connect } from 'react-redux';
import { Creators as ShopActionCreators } from 'modules/ducks/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAction();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.object,
  fetchCollectionsAction: PropTypes.func
};

const actions = {
  fetchCollectionsAction: ShopActionCreators.fetchCollections
};

export default connect(null, actions)(ShopPage);
