$(document).ready(function(){
    function IndexViewModel(){
        const self = this;
        self.view = ko.observable("home");
        self.homeVisible = ko.computed(function(){
            return self.view() === "home";
        });
        self.leaguesVisible = ko.computed(function(){
            return self.view() === "leagues";
        });
        self.golfersVisible = ko.computed(function(){
            return self.view() === "golfers";
        });
        self.coursesVisible = ko.computed(function(){
            return self.view() === "courses";
        });

        self.showHome = function(){
            self.view("home");
        };

        self.showLeagues = function(){
            self.view("leagues");
        };

        self.showGolfers = function(){
            self.view("golfers");
        };

        self.showCourses = function(){
            self.view("courses");
        };
    };

    ko.applyBindings(new IndexViewModel(), document.getElementById("application"));
});