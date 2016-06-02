import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
    selector: 'videoList',
    directives: [MD_LIST_DIRECTIVES],
    templateUrl: 'app/components/templates/video.component.html'
})

export class VideoComponent {

}
