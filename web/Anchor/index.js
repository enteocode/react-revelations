/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

/**
 * Anchor (template)
 *
 * @param {XML[]}  children
 * @param {Object} props
 * @return {XML}
 */
const Anchor = ({ children, ...props }) => (
    <a rel="noopener" target="_blank" {...props}>
        {children}
    </a>
);

export default Anchor;
