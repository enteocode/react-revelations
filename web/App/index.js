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
import Author from '../Author';
import Quote from '../Quote';

import Image, { RATIO_WIDE } from '../../src';

import './style.css';

/**
 * App (template)
 *
 * @return {XML}
 */
const App = () => {
    return (
        <main className="main container">
            <article className="article">
                <header className="article-header">
                    <Author
                        date={new Date()}

                        name="Székely Ádám"
                        role="Senior Full-stack Developer"
                        link="https://www.facebook.com/stereotribe"
                        image="static/img/szekely-adam.jpg"
                    />
                    <h2 className="article-title emphasized">A simple, responsive lazy-loader component for displaying images.</h2>
                </header>

                <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo nisl sed ipsum mattis vehicula. Aenean in ipsum odio. Pellentesque quis libero id risus vestibulum molestie. Vivamus id diam pellentesque, tristique tellus eu, dapibus nulla. Fusce purus ligula, vulputate id erat ac, accumsan ultrices eros. Etiam fringilla enim quam, eu volutpat odio varius vitae. Ut mattis tristique nulla, ut pharetra odio cursus sed.</p>

                <Image
                    source="//lorempixel.com/g/640/360/technics/"
                    width={640}
                    ratio={RATIO_WIDE}
                    caption="Random image with given width and RATIO_WIDE"
                />

                <p className="article-text">Praesent consectetur augue vitae mi laoreet, interdum laoreet ipsum mattis. Suspendisse elit ipsum, viverra sed ante a, convallis venenatis mi. Nullam sit amet iaculis ligula. Nulla id consectetur urna. Morbi in volutpat ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras porta lorem nec purus aliquam, a gravida lorem suscipit. Vestibulum eleifend, tortor a euismod fermentum, turpis justo bibendum turpis, sit amet tempor felis odio eu odio. Quisque dapibus nulla at blandit placerat. Sed id lacus convallis eros hendrerit varius vel eu libero. Phasellus molestie massa tortor, vel cursus erat vestibulum eu. Proin elementum, purus vitae rhoncus lobortis, urna sapien vehicula quam, vitae tempus mi purus vitae est. Morbi at hendrerit dolor. Duis nec felis felis. Integer eu lacinia sem, eget elementum orci.</p>

                <Image
                    source="//lorempixel.com/g/640/200/technics/"
                    width={640}
                    height={200}
                    caption="Random image with exact width and height"
                />

                <p className="article-text">Proin viverra elit non tellus pretium pharetra. Nullam aliquet sapien in urna iaculis, fringilla laoreet mauris ultricies. Sed lobortis tristique diam, ut euismod lacus pharetra non. Aenean ac pharetra dolor. Nulla mattis viverra scelerisque. Proin quis vulputate risus. Fusce placerat ornare mi quis interdum. Sed finibus, massa sit amet ornare tristique, ipsum metus elementum velit, ut commodo odio risus nec ex. Duis quis luctus sapien, a vestibulum felis. Pellentesque elementum, nisl eu accumsan fringilla, orci sem finibus metus, nec molestie nibh velit ac arcu. Praesent id dolor non neque accumsan hendrerit. Maecenas sagittis lorem ex, et efficitur orci venenatis quis.</p>
                <p className="article-text">Vivamus imperdiet ligula euismod tellus finibus, non bibendum metus facilisis. In hac habitasse platea dictumst. Maecenas ultrices ultricies magna vitae finibus. Nunc vulputate ex eu turpis sagittis, vitae pharetra turpis commodo. Quisque ornare mi eget odio ornare porttitor. Proin eu sem eu sapien pellentesque interdum vitae maximus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent quis varius nisl. Suspendisse viverra, eros ac lobortis dictum, augue metus condimentum lectus, id lacinia lectus nisl vel orci. Donec rhoncus sit amet ante accumsan sodales. In vel mollis justo. Praesent tortor purus, gravida tincidunt lacus at, ultricies varius elit. Fusce luctus, tortor cursus elementum euismod, orci orci mattis sem, vitae interdum urna metus eget purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium, arcu id hendrerit lacinia, lorem nisl malesuada dui, et lacinia urna nisl consectetur quam.</p>

                <Image
                    source="static/img/non-exist-image.jpg"
                    width={640}
                    height={360}
                    caption="Non-existing image"
                />

                <p className="article-text">Ut sit amet lacus vitae nisl dignissim viverra ac id dolor. Mauris ac dolor sed lacus lobortis ornare. Nulla egestas purus non ex ultricies aliquam. Mauris at leo eget felis accumsan tincidunt. Sed ligula arcu, bibendum vel mauris et, consequat blandit nulla. In ac urna dictum, dignissim nulla vel, venenatis nisl. Duis pharetra, ipsum id tempus egestas, augue dolor tempus enim, in ornare elit tortor sit amet ligula.</p>

                <Quote
                    cite="What we do for ourselves dies with us. What we do for others and the world remains and is immortal."
                    from="Albert Pike"
                />

                <p className="article-text">Sed porta mollis condimentum. Morbi vel viverra turpis. Quisque ut dolor id nulla faucibus convallis at vel risus. Cras at urna interdum, accumsan enim vel, dictum sapien. Fusce malesuada elit id bibendum molestie. Nulla lacinia ex eu ex auctor gravida. Suspendisse nec pulvinar justo, a aliquam eros. Ut dolor justo, tempus vel sem vel, pellentesque tincidunt tortor.</p>
                <p className="article-text">Nunc auctor in nunc nec gravida. In sollicitudin nisi id erat suscipit pharetra. Ut fermentum ante non gravida malesuada. Curabitur est turpis, venenatis aliquet imperdiet ac, sodales sed massa. Sed gravida quis leo ac auctor. Ut mollis dignissim pellentesque. Nulla a turpis nec nisi sodales sagittis.</p>
                <p className="article-text">Aliquam erat volutpat. Cras tristique convallis consequat. Aenean vitae lacus blandit, vulputate neque eu, placerat mi. Maecenas scelerisque luctus lorem. Duis vitae sollicitudin turpis, non ultrices nulla. Morbi auctor est a lorem interdum, ut efficitur diam bibendum. Duis ac ipsum ac lacus accumsan egestas sed eu nisi.</p>
            </article>

            <footer className="footer emphasized">
                <div className="footer-craft">
                    <div className="footer-right">Handcrafted with ❤ and passion</div>
                </div>

                <div className="footer-badge">
                    <Anchor
                        href="https://github.com/enteocode/react-revelations"
                        className="footer-icon"
                        title="View source on GitHub"
                    >
                        <img src="static/img/badges/github.svg" alt="GitHub" width="60" height="16"/>
                    </Anchor>
                </div>
            </footer>
        </main>
    )
};

export default App;
