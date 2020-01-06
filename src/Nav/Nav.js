import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default () => (
    <nav>
        <Link to='sorting'>Sorting Algorithms</Link>
        <Link to='linked-lists'>Linked Lists</Link>
    </nav>
);