import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  url: string = '';
  argInit = "link%3D";
  argEnd = "%26locale";
  newUrl = '';
  decodedUrl1 = "";
  decodedUrl = "";

  generateUrl() {
    this.newUrl = this.url.substring(this.url.indexOf(this.argInit) + this.argInit.length, this.url.indexOf(this.argEnd));
    this.decodedUrl1 = decodeURIComponent(this.newUrl);
    this.decodedUrl = decodeURIComponent(this.decodedUrl1);
  }
  copyUrl() {
    navigator.clipboard.writeText(this.decodedUrl)
      .then(() => {
        alert('Texto copiado com sucesso!');
      })
      .catch(() => {
        alert('Falha ao copiar o texto.');
      });
  }



}
