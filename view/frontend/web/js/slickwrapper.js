define([
    'jquery',
    'Swissup_SlickCarousel/js/slick'
], function($, slick) {
    /**
     * Allows to wrap any content into
     *
     * <div data-mage-init='{"slickwrapper": {"el": ".product-items", ...}}'>
     *     {{widget type="Swissup\Highlight\Block\ProductList\All" template="product/widget/content/grid.phtml"}}
     * </div>
     *
     * Slick carousel will be created on child `el` element with all received options.
     *
     * This wrapper is usefull, when you'd like to create click carousel on a
     * dynamically generated content (product listings, etc), and there is no
     * possibility to add `data-mage-init` property to slides parent element.
     *
     * @param  {Object} options
     * @param  {Element} el
     */
    $.fn.slickwrapper = function(options, el) {
        el = el || this;

        if (options.el) {
            $(el).find(options.el).slick(options);
        } else {
            $(el).slick(options);
        }
        return this;
    }
    return $.fn.slickwrapper;
});
