import React from 'react';

import Hit from './Hit';
import { getRandomKey } from '../../utils';

const HitMap = props => {
  const { results } = props;
  const resultMap = results.map(result => {
    return <Hit key={getRandomKey()} {...result} />;
  });

  return (
    <ul>{resultMap}</ul>
  );
}

export default HitMap;
