React Revelations
=================

> Image component for React.

## Key Features

- Declarative
- Functional component
- Responsive
- Lazy-loaded media

## Highlights

- Module syntax
- ES6
- React

## Installation

```
npm i enteocode/react-revelations
```

## Usage

``` jsx
import React from 'react';
import Image, { RATIO_WIDE } from 'react-revelations';

const MyComponent = () => (
    <article>
        <h2>Lorem ipsum</h2>
        <Image
            source="//lorempixel.com/g/640/360/"
            width={640}
            ratio={RATIO_WIDE}
            caption="Random image"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
);
```

## Properties

- **source** : {string} - The URL of the image 

Two of these properties must be set properly to calculate aspect ratio
for the placeholder. This is a must to prevent repaints on DOM.

- **width** : (number) - Image size in pixels
- **height** : (number) - Image size of pixels
- **ratio** : (number[]) - Two elements Array with the width/height ratio

Optional properties:

- **caption** (string) - The title of the Image (this will be read by screen-readers)
- **containerClass** (string) - Stylesheet class to append
- **errorColor** (string) - Color of the error icon (if can't load the resource)
- **loaderColor** (string) - Color of the loader spinner

## Example

You can see the component in action at the ![GitHub Page][1] of the repository.

## License

The MIT License (MIT). Please see the [License File][2] for more information.


[1]: https://enteocode.github.io/react-revelations/ "GitHub Page for React Revelations"
[2]: ./LICENSE
