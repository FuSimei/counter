
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../redux/action';
import Counter from '../component/counter';

export default connect(
    state => ({count: state}),
    {increment, decrement}
)(Counter);