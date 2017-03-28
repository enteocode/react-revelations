/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import './style.css';

/**
 * Quote (template)
 *
 * @param {string} cite
 * @param {string} from
 * @return {XML}
 */
const Quote = ({ cite, from }) => (
    <blockquote className="quote">
        <div className="quote-cite">{cite}</div>

        { ! from ? null : <div className="quote-from">
            {from}
        </div>}
    </blockquote>
);

export default Quote;
