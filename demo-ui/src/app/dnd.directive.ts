import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})

export class DndDirective {

  private static LIGHT_COLOR = '#f5fcff';
  private static DEFAULT_OPACITY = '1';
  private static EVENT = '$event';

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = DndDirective.LIGHT_COLOR;
  @HostBinding('style.opacity') private opacity = DndDirective.DEFAULT_OPACITY;

  //Dragover listener
  @HostListener('dragover', [DndDirective.EVENT]) onDragOver(evt) {
    this.setParameters(evt, '#9ecbec', '0.8');
  }

  //Dragleave listener
  @HostListener('dragleave', [DndDirective.EVENT])
  public onDragLeave(evt) {
    this.setParameters(evt, DndDirective.LIGHT_COLOR, DndDirective.DEFAULT_OPACITY);
  }

  //Drop listener
  @HostListener('drop', [DndDirective.EVENT])
  public ondrop(evt) {
    this.setParameters(evt, DndDirective.LIGHT_COLOR, DndDirective.DEFAULT_OPACITY);
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  private setParameters(evt, background, opacity) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = background;
    this.opacity = opacity;
  }
}
