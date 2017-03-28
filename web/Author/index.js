/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Anchor from '../Anchor';
import * as Utils from './utils';

import './style.css';



/**
 * Returns a formatted
 * @param date
 * @param format
 */
const getDateText = (date, format) => ('');

/**
 * Author (template)
 *
 * @param {string} name
 * @param {string} role
 * @param {string} link
 * @param {string} email
 * @param {string} image
 * @param {Date} date
 * @return {XML}
 */
const Author = ({ name, role, link, email, image, date }) => (
    <div className="author">
        {/* Avatar */}
        { ! image ? null : <div className="author-avatar">
            <img src={image} alt={name}/>
        </div>}

        {/* Profile and date of article-publication */}

        <div className="author-wrapper">
            <a className="author-name" href={Utils.getMailLink(email)}>{name}</a>
            <span className="author-role">{role}</span>

            {! date ? null : <time className="author-publish" dateTime={Utils.getDateText(date, Utils.DATE_BASIC)}>
                {Utils.getDateText(date, Utils.DATE_LOCAL)}
            </time>}
        </div>

        {/* Facebook */}

        { ! link ? null : <div className="author-social">
            <Anchor className="link" href={link}>Facebook</Anchor>
        </div>}
    </div>
);

export default Author;
