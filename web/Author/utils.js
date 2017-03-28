/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Date format flags

export const DATE_BASIC = 0 | 1;
export const DATE_LOCAL = 0 | 2;

// Months

const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Pads a text with the given character to the given length
 *
 * @param {string} text
 * @param {string} padCharacter
 * @param {number} maxLength
 * @return {string}
 */
const padText = (text, padCharacter, maxLength = 0) => {
    return text.length < maxLength ? padText(padCharacter + text, padCharacter, maxLength) : text;
};

/**
 * Returns the date with it's ordinal suffix
 *
 * @param {number} date
 * @return {string}
 */
const getDateWithSuffix = (date) => {
    const base = date.toString();
    const lastDigit = base.substr(-1);

    switch (lastDigit)
    {
        case '1': return `${base}st`;
        case '2': return `${base}nd`;
        case '3': return `${base}rd`;

        default: return `${base}th`;
    }
};

/**
 * Returns a formatted datetime
 *
 * @param {Date} date
 * @param {number} format
 * @return {string}
 */
export const getDateText = (date, format) => {
    switch (format)
    {
        case DATE_BASIC:
            return [
                date.getFullYear(),
                padText(date.getMonth() + 1 + '', '0', 2),
                padText(date.getDate()  + 1 + '', '0', 2)
            ].join('-');

        case DATE_LOCAL:
            return `${getDateWithSuffix(date.getDate())} of ${MONTH[date.getMonth()]}, ${date.getFullYear()}`;
    }
};

/**
 * Returns with the mailer-link of the given email address
 *
 * @param {string} email
 * @return {string}
 */
export const getMailLink = (email) => `mailto:${email}?subject=Hello`;
