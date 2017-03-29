/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import * as Utils from './utils';
import './style.css';

// Ratio flags if just one dimension was given

export const RATIO_WIDE   = Utils.RATIO_WIDE;
export const RATIO_NORMAL = Utils.RATIO_NORMAL;

// Shortcuts

const PropTypes = React.PropTypes;

/**
 * Image (component)
 *
 * @namespace react-revelations
 * @public
 */
class Image extends React.Component
{
    static propTypes = {
        wrapperClass:   PropTypes.string,
        containerClass: PropTypes.string,
        width:          PropTypes.number,
        height:         PropTypes.number,
        ratio:          PropTypes.array,
        source:         PropTypes.string,
        caption:        PropTypes.string
    };

    static defaultProps = {
        caption: ''
    };

    static isListenerActive = false;

    constructor(props) {
        super(props);
        this.state = {
            image:  false,
            error:  false,
            loaded: false
        };
    }

    componentDidMount() {
        if (false === Image.isListenerActive) {
            Image.isListenerActive = true;
            Utils.addListeners();
        }

        Utils.addElement(this);
    }

    componentWillUnmount() {
        Utils.removeElement(this);
    }

    render() {
        const { width, height, ratio, source, caption }  = this.props;
        const { containerClass } = this.props;
        const { loaderColor='#285cff', errorColor='#f64d4e' } = this.props;
        const { image, error, loaded } = this.state;

        const container = ['Image'];

        // Extend stylesheet classes (if needed)

        if (loaded) {
            container.push('Image-loaded');
        }
        if (error) {
            container.push('Image-error');
        }
        if (containerClass) {
            container.push(containerClass);
        }

        return (
            <figure ref="image" className={container.join(' ')} style={{ width }}>
                <div className="Image-wrapper" onClick={this.props.onClick}>
                    <div className="Image-placeholder" style={Utils.getAspectRatio(width, height, ratio)}/>

                    {/* Loader */}

                    <svg className="Image-loader" height={50} viewBox="0 0 50 50" width={50}>
                        <circle stroke={loaderColor} cx={25} cy={25} r={20}/>
                    </svg>

                    {/* Image */}

                    {image && <img
                        className="Image-object"
                        src={source}
                        alt={caption}
                        title={caption}

                        onLoad={()  => {this.setLoaded()}}
                        onError={() => {this.setError()}}
                    />}

                    {/* Error */}

                    {error && <div className="Image-alert">
                        <svg fill={errorColor} height={50} viewBox="0 0 24 24" width={50}>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                        </svg>
                    </div>}
                </div>

                {caption && <figcaption className="Image-caption">{caption}</figcaption>}
            </figure>
        );
    }

    setVisible() {
        Utils.removeElement(this);
        this.setState({ image: true });
    }

    setLoaded() {
        this.setState({ loaded: true });
    }

    setError() {
        this.setState({ error: true });
    }
}

export default Image;
