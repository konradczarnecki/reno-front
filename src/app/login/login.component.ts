import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileChangeEvent} from '@angular/compiler-cli/src/perform_watch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  state: string;

  constructor() {
    this.state = 'base';
  }

  ngOnInit() {
  }

  clickLogin() {

    this.fileInput.nativeElement.click();
  }

  readFile(e) {

    let file = e.target.files[0];
    if (!file) return;

    let reader = new FileReader();

    reader.onload = function(e) {
      // let contents = e.target.result;
      // displayContents(contents);
    };
    reader.readAsText(file);
  }

}
