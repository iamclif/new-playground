import {Component} from 'angular2/core';

@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    name = 'The Lord of the Rings';

    wasWatched() {
        return true;
    }
}