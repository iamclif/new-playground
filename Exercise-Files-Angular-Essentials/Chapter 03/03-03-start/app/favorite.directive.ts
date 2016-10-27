import {Directive, HostBinding, Input} from 'angular2/core';

@Directive({
    selector: '[mwFavorite]'
})

@Input({
    
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
}