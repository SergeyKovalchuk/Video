import { Component }         from '@angular/core';
import { SearchComponent }   from './videos/search.component';
import { VideoComponent }    from './videos/videoList.component';

@Component({
    selector: 'home',
    directives: [SearchComponent, VideoComponent],
    templateUrl: 'app/components/templates/home.component.html'
})

export class HomeComponent{
}
