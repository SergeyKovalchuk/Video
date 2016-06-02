import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: 'searchComponent',
    directives: [MdInput, MdButton, MdIcon],
    template: `<md-input placeholder="What video do you want" maxLength="100" class="demo-full-width searchInput" #characterCountHintExample>
                    <!-- <md-hint align="end"> {{characterCountHintExample.characterCount}} / 100</md-hint> -->
               </md-input>
               <button md-raised-button class="foundButton">FOUND</button>
               <button md-mini-fab class="addNewVideoButton">
                   <md-icon class="md-24">add</md-icon>
               </button>
              `,
    providers: [MdIconRegistry, HTTP_PROVIDERS]
})

export class SearchComponent {

}
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
