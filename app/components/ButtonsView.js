import {Marionette} from '../../vendor/vendor';
import tpl from '../templates/buttons.tpl';

export default Marionette.View.extend({
    template: tpl,

    className: "buttons-view",

    events: {
        "click .js-about-me-button": "onBubbleAboutMeClick",
        "click .js-education-button": "onBubbleEducationClick",
        "click .js-contact-me-button": "onBubbleContactMeClick"
    },

    onBubbleAboutMeClick: function() {
        this.triggerMethod("change:context", "about");
    },

    onBubbleEducationClick: function() {
        this.triggerMethod("change:context", "education");
    },

    onBubbleContactMeClick: function() {
        this.triggerMethod("center:footer:icons");
    }
});