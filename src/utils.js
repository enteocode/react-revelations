/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const elementList  = [];

const getNextFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

const getPadding   = (ratio) => ({ paddingTop: (ratio * 100) + '%' });

// Default and most common ratios

export const RATIO_WIDE   = [0 | 0x0010, 0 | 0x0009];
export const RATIO_NORMAL = [0 | 0x0004, 0 | 0x0003];

/**
 * Set the view by revealing scrolled elements
 */
function setView()
{
    getNextFrame(() => {
        const viewport = window.innerHeight;

        elementList.forEach((item) => {
            const { top, height } = item.refs.image.getBoundingClientRect();

            if (top <= viewport && top + height > 0) {
                item.setVisible();
            }
        });
    });
}

/**
 * Adds an element to the storage
 *
 * @param {Image} component
 */
export function addElement(component)
{
    elementList.push(component);
    setView();
}

/**
 * Removes an element from the storage
 *
 * @param {Image} component
 */
export function removeElement(component)
{
    const index = elementList.indexOf(component);

    if (-1 !== index) {
        elementList.splice(index, 1);
    }
}

/**
 * Calculates the padding by the given dimensions or aspect-ratio
 *
 * @param {number} width
 * @param {number} height
 * @param {number[]} ratio
 * @return {Object}
 */
export function getAspectRatio(width = 0, height = 0, ratio = null)
{
    if (ratio && (width ? ! height : height)) {
        return getPadding(width ? ratio[1] / ratio[0] : ratio[0] / ratio[1]);
    }
    if (width && height) {
        return getPadding(height / width);
    }

    return { paddingTop: '0px' };
}

/**
 * Append the global listeners for the events of scroll and resize
 */
export function addListeners()
{
    window.addEventListener('scroll', setView);
    window.addEventListener('resize', setView);
}
