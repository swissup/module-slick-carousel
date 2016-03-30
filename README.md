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
<div data-mage-init='{"slickCarousel": {"slidesToShow": 4, "slidesToScroll": 4}}'>
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
  <div><h3>5</h3></div>
  <div><h3>6</h3></div>
</div>
```

See the list of available options at [official site](http://kenwheeler.github.io/slick/#settings)

[slick_homepage]: https://github.com/kenwheeler/slick
