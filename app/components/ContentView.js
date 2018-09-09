import {Marionette} from '../../vendor/vendor';
import tpl from '../templates/content.tpl';

export default Marionette.View.extend({
    template: tpl,

    _aboutMeString: "I am a Computer Science and Entrepreneurial Leadership Student at Tufts University" +
        ", interested in gaining practical experience through internships in Software" +
        " Development and related fields. I am currently working as a Software Engineering" +
        " Intern at Genospace in Cambridge, Massachusetts, doing full-stack web development." +
        " I grew up in Los Angeles, California, and I currently am living in Medford, Massachusetts " +
        "while at Tufts.",

    onAttach: function() {
        this.on("change:content:text", this.changeContentText, this);
        this.$(".js-content").hide();
        this.$(".js-content-text").text(this._aboutMeString).fadeIn();
    },

    _transitionContentText: function(view, text) {
        view.$(".js-content-text").fadeOut(250, function() {
            view.$(this).text(text).fadeIn(250);
        });
    },

    changeContentText: function(buttonText) {
        this.$(".js-content").hide();
        this.$el.removeClass("invisible");
        switch (buttonText) {
            case "about":
                this._transitionContentText(this, this._aboutMeString);
                break;
            case "education":
                this.$(".js-education").fadeIn(250);
                // this.model.set({courses: []});
                // this._addCourses(false);
                break;
        }
    },

    // _addCourses: function(slowly) {
    //     var courses = ["Algorithms", "Artificial Intelligence", "Computer Security", "Programming Languages", "Operating Systems", "Machine Structures and Assembly Language Programming", "Data Structures", "Entrepreneurial Leadership", "Marketing", "Entrepreneurial Business Planning"];
    //     if (!slowly){
    //         this.model.set({courses: courses});
    //         this.render();
    //         return;
    //     }
    //     var view = this;
    //     if (this.model.get('courses').length < courses.length){
    //         _.each(courses, function(course, x) {
    //             setTimeout(function() {
    //                 var tempCourses = view.model.get('courses');
    //                 tempCourses.push(course);
    //                 view.model.set({courses: tempCourses});
    //                 view.render();
    //             }, 50 * x);
    //         });
    //     }
    // }
});