import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rre';

  editorForm: FormGroup;

  editorContent: string;

  editorStyle ={
    height: '300px',
  }

  ngOnInit(){
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  maxLength(e){
    if(e.editor.getLength() > 1000){
      e.editor.deleteText(1000, e.editor.getLength());
    }
  }
}
