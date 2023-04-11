import { Component } from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  year: number = new Date().getFullYear();
  sid = '';
  ud = '';
  shareuid = '';
  um = '';
  newUrlTeam = '';
  newUrlInvite = '';
  urlTeam = '';
  msgError = 'Obrigatório.';
  msgErrorTeam = '';
  msgErrorTeam1 = '';
  msgErrorInvite = '';
  msgErrorInvite1 = '';



  generateUrls(form: NgForm) {
    console.log(form.valid)
    if (form.valid) {
      this.newUrlTeam = "http://novoevento78-lobr.oasgames.com/activity?sid="+this.sid+"&ud="+this.ud+"&type=team&shareuid="+this.shareuid+"&um="+this.um;
      this.newUrlInvite = "http://novoevento78-lobr.oasgames.com/activity?sid="+this.sid+"&ud="+this.ud+"&type=invite&shareuid="+this.shareuid+"&um="+this.um;
    }
  }
  copyTeam() {
    this.msgErrorTeam = "";
    this.msgErrorTeam1 = "";
    navigator.clipboard.writeText(this.newUrlTeam)
      .then(() => {
        if (this.newUrlTeam === '') {
          throw new Error();
        }
        this.msgErrorTeam = 'URL copiada com Sucesso!';
      })
      .catch(() => {
        this.msgErrorTeam1 = 'Nada a copiar.';
      });


  }
  copyInvite() {
    this.msgErrorInvite = "";
    this.msgErrorInvite1 = "";
    navigator.clipboard.writeText(this.newUrlInvite)
      .then(() => {
        if (this.newUrlInvite === '') {
          throw new Error();
        }
        this.msgErrorInvite = 'URL copiada com Sucesso!';
      })
      .catch(() => {
        this.msgErrorInvite1 = 'Nada a copiar.';
      });
  }

}
