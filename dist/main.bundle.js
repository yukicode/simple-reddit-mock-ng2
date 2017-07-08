webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "li {\r\n    list-style-type: none;\r\n    margin: 5px auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".story {\r\n    margin: auto 15%;\r\n}\r\n\r\n.vote {\r\n    color: mediumaquamarine;\r\n    font-weight: 700;\r\n    border-radius: 3px;\r\n    border: 1px solid mediumaquamarine;\r\n    padding: 5px;\r\n    margin: auto 5px;\r\n}\r\n\r\n.image {\r\n    background-color: mediumaquamarine;\r\n    max-width: 150px;\r\n    margin: auto;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .image {\r\n        max-width: 80px;\r\n    }\r\n    h3 {\r\n        font-size: 14px;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .vote {\r\n        font-size: 10px;\r\n    }   \r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .image {\r\n        max-width: 50px;\r\n    }\r\n\r\n    .image>h3 {\r\n        display: none;\r\n    }\r\n\r\n    .btn-description {\r\n        display: none;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "form {\r\n    margin: auto 15%;\r\n}\r\n.main-form {\r\n    background-color: mediumaquamarine;\r\n    border-radius: 3px;\r\n    margin: 10px;\r\n    padding: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-form>Loading...</app-form>\r\n\r\n<app-article-list></app-article-list>"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <ul class=\"list\">\r\n    <li *ngFor=\"let story of stories\">\r\n      <app-article [story]=\"story\"></app-article>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<div class=\"story row\">\r\n  <div class=\"image col-xs-3\">\r\n    <h2 class=\"score\">{{story.score}}</h2>\r\n    <h3>POINTS</h3>\r\n    <br>\r\n  </div>\r\n  <div class=\"content col-xs-9\">\r\n    <h3 class=\"story-title\">{{story.title}}</h3>\r\n    <p class=\"story-domain\">{{story.getDomain()}}</p>\r\n    <button class=\"vote upvote btn btn-default\" (click)=\"upVote()\">&#8679; <span class=\"btn-description\">Up Vote: </span><span class=\"upvote-count\">{{story.upvote}}</span></button> \r\n    <button class=\"vote downvote btn btn-default\" (click)=\"downVote()\">&#8681; <span class=\"btn-description\">Down Vote: </span><span class=\"downvote-count\">{{story.downvote}}</span></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n  <div class=\"row main-form\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" id=\"lb-title\" control-label>Title</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"title\" name=\"title\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"link\" id=\"lb-link\" control-label>Link</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"link\" [(ngModel)]=\"link\" name=\"link\">\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"onSubmit()\">Submit</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_data__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService() {
        this.list = __WEBPACK_IMPORTED_MODULE_1__sample_data__["a" /* STORIES */];
        this.defaultId = 1000;
    }
    DataService.prototype.addStory = function (_title, _link) {
        this.list.push(new __WEBPACK_IMPORTED_MODULE_2__story__["a" /* Story */](_title, _link, 0, 0, this.defaultId++));
    };
    DataService.prototype.getStories = function () {
        return this.list.sort(function (a, b) {
            return b.score - a.score;
        });
    };
    DataService.prototype.upVote = function (id) {
        var story = this.list.find(function (story) { return story.id === id; });
        if (!story) {
            return;
        }
        story.upvote++;
    };
    DataService.prototype.downVote = function (id) {
        var story = this.list.find(function (story) { return story.id === id; });
        if (!story) {
            return;
        }
        story.downvote++;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story; });
var Story = (function () {
    function Story(title, link, upvote, downvote, id) {
        this.title = title;
        this.link = link;
        this.upvote = upvote || 0;
        this.downvote = downvote || 0;
        this.id = id || 0;
    }
    Object.defineProperty(Story.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "upvote", {
        get: function () {
            return this._upvote;
        },
        set: function (v) {
            this._upvote = v;
            this._score = v - this._downvote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "downvote", {
        get: function () {
            return this._downvote;
        },
        set: function (v) {
            this._downvote = v;
            this._score = this._upvote - v;
        },
        enumerable: true,
        configurable: true
    });
    Story.prototype.getDomain = function () {
        if (!this.link) {
            return '';
        }
        var splited = this.link.split('//');
        var result = splited.length > 1 ? splited[1] : splited[0];
        result = result.split('/')[0];
        return result;
    };
    return Story;
}());

//# sourceMappingURL=story.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(87);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(145),
        styles: [__webpack_require__(141)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_form_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__article_list_article_list_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__article_article_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_7__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__article_article_component__["a" /* ArticleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListComponent = (function () {
    function ArticleListComponent(ds) {
        this.ds = ds;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        this.stories = this.ds.getStories();
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-article-list',
        template: __webpack_require__(146),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ArticleListComponent);

var _a;
//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_story__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = (function () {
    function ArticleComponent(ds) {
        this.ds = ds;
    }
    ArticleComponent.prototype.upVote = function () {
        this.ds.upVote(this.story.id);
    };
    ArticleComponent.prototype.downVote = function () {
        this.ds.downVote(this.story.id);
    };
    return ArticleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_story__["a" /* Story */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_story__["a" /* Story */]) === "function" && _a || Object)
], ArticleComponent.prototype, "story", void 0);
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__(147),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _b || Object])
], ArticleComponent);

var _a, _b;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(ds) {
        this.ds = ds;
    }
    FormComponent.prototype.onSubmit = function () {
        this.ds.addStory(this.title, this.link);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__(148),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object])
], FormComponent);

var _a;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-header',
        template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">Simple Reddit</a>\n        </div>\n      </div>\n    </nav>\n  ",
        styles: []
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__story__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORIES; });

var STORIES = [
    new __WEBPACK_IMPORTED_MODULE_0__story__["a" /* Story */]("W3Schools", "https://www.w3schools.com/", 50, 10, 9001),
    new __WEBPACK_IMPORTED_MODULE_0__story__["a" /* Story */]("Unicode Character Table", "https://unicode-table.com/en/", 11, 0, 9002),
    new __WEBPACK_IMPORTED_MODULE_0__story__["a" /* Story */]("Reddit", "https://www.reddit.com/", 100, 10, 9003),
    new __WEBPACK_IMPORTED_MODULE_0__story__["a" /* Story */]("Hackernoon", "https://hackernoon.com/", 20, 1, 9004),
    new __WEBPACK_IMPORTED_MODULE_0__story__["a" /* Story */]("Youtube", "https://www.youtube.com/", 200, 100, 9005),
];
//# sourceMappingURL=sample.data.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[173]);
//# sourceMappingURL=main.bundle.js.map