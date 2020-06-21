import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from 'modules/ducks/directory/directory.selectors';

import MenuItem from 'components/menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

Directory.propTypes = {
  sections: PropTypes.array
};

export default connect(mapStateToProps)(Directory);
