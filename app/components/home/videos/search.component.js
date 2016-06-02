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
var http_1 = require('@angular/http');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'searchComponent',
            directives: [input_1.MdInput, button_1.MdButton, icon_1.MdIcon],
            template: "<md-input placeholder=\"What video do you want\" maxLength=\"100\" class=\"demo-full-width searchInput\" #characterCountHintExample>\n                    <!-- <md-hint align=\"end\"> {{characterCountHintExample.characterCount}} / 100</md-hint> -->\n               </md-input>\n               <button md-raised-button class=\"foundButton\">FOUND</button>\n               <button md-mini-fab class=\"addNewVideoButton\">\n                   <md-icon class=\"md-24\">add</md-icon>\n               </button>\n              ",
            providers: [icon_1.MdIconRegistry, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
// import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';
//
// @Component({
//   selector: 'videoComponent',
//   templateUrl: 'app/components/templates/video.component.html',
//   directives: [ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
// })
//
// export class VideoComponent {
//     // public oneAtATime:boolean = true;
//     // public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];
//     //
//     // public status:Object = {
//     //     isFirstOpen: true,
//     //     isFirstDisabled: false
//     // };
//     //
//     // public groups:Array<any> = [{
//     //     title: 'Dynamic Group Header - 1',
//     //     content: 'Dynamic Group Body - 1'
//     // },
//     // {
//     //     title: 'Dynamic Group Header - 2',
//     //     content: 'Dynamic Group Body - 2'
//     // }];
//     //
//     // public addItem():void {
//     //     this.items.push(`Items ${this.items.length + 1}`);
//     // }
// }
//# sourceMappingURL=search.component.js.map