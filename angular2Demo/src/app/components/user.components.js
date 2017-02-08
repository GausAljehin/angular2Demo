"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('../services/post.service');
var UserComponent = (function () {
    function UserComponent(PostsService) {
        var _this = this;
        this.PostsService = PostsService;
        this.name = 'Mirko';
        this.email = 'misha.sekulic@gmail.com';
        this.address = {
            street: 'aerodromska 31',
            city: 'Podgorica'
        };
        this.hobbies = ['gitara', 'matematika', 'dzu dzica'];
        this.showHobbies = false;
        this.PostsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies)
            this.showHobbies = false;
        else
            this.showHobbies = true;
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (j) {
        this.hobbies.splice(j, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.components.html',
            providers: [post_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.components.js.map