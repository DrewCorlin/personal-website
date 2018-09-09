import {Marionette} from '../../vendor/vendor';
import tpl from '../templates/footer.tpl';

export default Marionette.View.extend({
    template: tpl,
    className: "footer-container",

    onAttach: function() {
        this.on("adjust:icons", this.adjustIcons, this);
    },

    adjustIcons: function(centered) {
        this.model.set({"centered": centered});
        this.render();
    }
});