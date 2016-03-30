# Slick Carousel

[the last carousel you'll ever need][slick_homepage] for Magento2

### Installation

```bash
cd <magento_root>
composer config repositories.swissup composer http://swissup.github.io/packages/
composer require swissup/slick-carousel --prefer-source
bin/magento module:enable Swissup_SlickCarousel
bin/magento setup:upgrade
```

### Usage

```html
<div data-mage-init='{"slick": {"slidesToShow": 4, "slidesToScroll": 1, "dots": true, "autoplay": true, "variableWidth": true}}'>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/150x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/300x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/450x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/250x150" alt=""/></div>
    <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
</div>
```

1. See the list of available options at slick's carousel [official site][slick_settings]
2. See the [Magento's guide][magento_initialize_js] on how to additionally
initialize JS component.

[slick_homepage]: https://github.com/kenwheeler/slick
[slick_settings]: http://kenwheeler.github.io/slick/#settings
[magento_initialize_js]: http://devdocs.magento.com/guides/v2.0/javascript-dev-guide/javascript/js_init.html
