import React from 'react';
import { Helmet } from 'react-helmet';

const HeadTitle = ({title}) => {
  return (
    <Helmet>
      <title>{title} - CarSeller</title>
    </Helmet>
  );
};

export default HeadTitle;