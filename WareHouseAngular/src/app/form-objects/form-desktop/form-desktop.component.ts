import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';

@Component({
  selector: 'app-form-desktop',
  templateUrl: './form-desktop.component.html',
  styleUrls: ['./form-desktop.component.scss']
})
export class FormDesktopComponent implements OnInit {

  @Output() desktopToEmit = new EventEmitter<{product:Desktop, note:String}>();
  desktopTemp = new Desktop();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {

  }

  setDesktop(entity): void {
    this.desktopTemp = JSON.parse(JSON.stringify(entity));
  }

  sendDesktopToParent() {
    this.desktopToEmit.emit({product:this.desktopTemp, note:this.noteTemp});
}

}
