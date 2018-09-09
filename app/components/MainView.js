import {Backbone, Marionette} from '../../vendor/vendor';
import ButtonsView from './ButtonsView';
import ContentView from './ContentView';
import FooterView from './FooterView';
import tpl from '../templates/main.tpl';

var Entities = {
    CourseList: Backbone.Model.extend({
        defaults: {
            courses: ["Algorithms", "Artificial Intelligence", "Computer Security", "Programming Languages", "Operating Systems", "Machine Structures and Assembly Language Programming", "Data Structures", "Entrepreneurial Leadership", "Marketing", "Entrepreneurial Business Planning"]
        }
    }),

    Footer: Backbone.Model.extend({
        defaults: {
            centered: false
        }
    })
};

export default Marionette.View.extend({
    template: tpl,
    className: "main-view",

    regions: {
        buttonsRegion: ".js-buttons-region",
        contentRegion: ".js-content-region",
        footerRegion: ".js-footer-region"
    },

    _contentView: null,
    _footerView: null,

    onRender: function() {
        this.showChildView("buttonsRegion", new ButtonsView());
        this._contentView = new ContentView({model: new Entities.CourseList()});
        this.showChildView("contentRegion", this._contentView);
        this._footerView = new FooterView({model: new Entities.Footer()});
        this.showChildView("footerRegion", this._footerView);
    },

    onChildviewChangeContext: function(buttonText) {
        this._contentView.triggerMethod("change:content:text", buttonText);
        this.centerFooterStyling(false);
        // this.$('.js-footer-logo').removeClass('footer-logo--centered').addClass('footer-logo');
        this._footerView.triggerMethod("adjust:icons", false);
    },

    onChildviewCenterFooterIcons: function() {
        this.centerFooterStyling(true);
        // Make this work for all 3
        // this.$('.js-footer-logo').removeClass('footer-logo').addClass('footer-logo--centered');
        this._footerView.triggerMethod("adjust:icons", true);
    },

    centerFooterStyling: function(center) {
        if (center) {
            this.$('.js-content-region').addClass("invisible");
            this.$('.js-footer-region').removeClass('footer-region').addClass('footer-region--centered');
        } else {
            this.$('.js-content-region').removeClass("invisible");
            this.$('.js-footer-region').removeClass('footer-region--centered').addClass('footer-region');
        }
    }
});
