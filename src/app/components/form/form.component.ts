import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

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
  urlTeam = '';
  urlInvite = '';
  msgError = 'Obrigatório.';
  msgTeam = '';
  msgTeam1 = '';
  msgInvite = '';
  msgInvite1 = '';
  newUrlTeam = '';
  newUrlInvite = '';


  generateUrls(form: NgForm) {
    if (form.valid) {
      this.newUrlTeam = "http://novoevento78-lobr.oasgames.com/activity?sid="+this.sid+"&ud="+this.ud+"&type=team&shareuid="+this.shareuid+"&um="+this.um;
      this.urlTeam = this.newUrlTeam;
      this.newUrlInvite = "http://novoevento78-lobr.oasgames.com/activity?sid="+this.sid+"&ud="+this.ud+"&type=invite&shareuid="+this.shareuid+"&um="+this.um;
      this.urlInvite = this.newUrlInvite;
    }else{
      this.msgError = 'Obrigatório.';
    }
  }
  copyTeam() {
    this.msgTeam = "";
    this.msgTeam1 = "";

    navigator.clipboard.writeText(this.newUrlTeam)
      .then(() => {
        if (this.newUrlTeam === '') {
          throw new Error();
        }
        this.msgTeam = 'URL copiada com Sucesso!';
        this.newUrlTeam = '';

      })
      .catch(() => {
        this.msgTeam1 = 'Nada a copiar.';
      });
  }
  copyInvite() {
    this.msgInvite = "";
    this.msgInvite1 = "";

    navigator.clipboard.writeText(this.newUrlInvite)
      .then(() => {
        if (this.newUrlInvite === '') {
          throw new Error();
        }
        this.msgInvite = 'URL copiada com Sucesso!';
        this.newUrlInvite = '';
      })
      .catch(() => {
        this.msgInvite1 = 'Nada a copiar.';
      });
  }

}
