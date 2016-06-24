# Slick Carousel

[the last carousel you'll ever need][slick_homepage] for Magento2

### Installation

```bash
cd <magento_root>
composer config repositories.swissup composer https://docs.swissuplabs.com/packages/
composer require swissup/slick-carousel --prefer-source
bin/magento module:enable Swissup_SlickCarousel
bin/magento setup:upgrade
```

### Usage

Add the following or similar code to Cms Page or Block:

```html
<div data-mage-init='{"slick": {"slidesToShow": 4, "slidesToScroll": 1, "dots": false, "autoplay": true, "swipeToSlide": true}}'>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
</div>
```

### Advanced Usage

 -  See the list of available options at slick's carousel [official site][slick_settings]
 -  See the [Magento's guide][magento_initialize_js] on how to additionally
    initialize JS component.

[slick_homepage]: https://github.com/kenwheeler/slick
[slick_settings]: http://kenwheeler.github.io/slick/#settings
[magento_initialize_js]: http://devdocs.magento.com/guides/v2.0/javascript-dev-guide/javascript/js_init.html
