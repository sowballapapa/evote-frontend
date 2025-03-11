import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Editor, NgxEditorModule, Toolbar} from 'ngx-editor';

@Component({
    selector: 'app-admin-sponsorships-details-edit',
  imports: [
    RouterLink,
    NgxEditorModule
  ],
    templateUrl: './admin-sponsorships-details-edit.component.html',
    styleUrl: './admin-sponsorships-details-edit.component.css'
})
export class AdminSponsorshipsDetailsEditComponent {
  editor!: Editor
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // or, set options for link:
    //[{ link: { showOpenInNewTab: false } }, 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear', 'indent', 'outdent'],
    ['superscript', 'subscript'],
    ['undo', 'redo'],
  ];
  colorPresets = [ 'black','red', 'green', 'yellow', 'blue', 'purple', 'pink', 'grey', 'teal', 'cyan' ];


  ngOnInit() {
    this.editor = new Editor({
      keyboardShortcuts: true,
    });
  }

  ngOnDestroy() {
    this.editor.destroy();
  }
}
