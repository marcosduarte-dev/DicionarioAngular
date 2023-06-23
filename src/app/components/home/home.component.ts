import { Component } from '@angular/core';
import { DicionarioAbertoService } from 'src/app/services/dicionario-aberto.service';
import { XMLParser } from 'fast-xml-parser';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService],
})
export class HomeComponent {
  parser = new XMLParser();

  constructor(
    private dicionarioService: DicionarioAbertoService,
    private messageService: MessageService
  ) {}

  palavra: string = '';
  definicao: string[] = [];
  exibirCardDefinicao: boolean = false;

  pesquisar() {
    this.dicionarioService
      .getWord(this.palavra.toLowerCase())
      .subscribe((res) => {
        if (res[0] != undefined) {
          var json = this.parser.parse(res[0].xml);

          if (json.entry.sense.length > 0)
            this.definicao = json.entry.sense[0].def.split('\n');
          else this.definicao = json.entry.sense.def.split('\n');

          if (this.definicao.length > 0) {
            this.exibirCardDefinicao = true;
            this.messageService.add({
              key: 'tc',
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Palavra obtida com sucesso',
            });
          } else {
            this.messageService.add({
              key: 'tc',
              severity: 'error',
              summary: 'Erro',
              detail: 'Palavra não encontrada no sistema',
            });
          }
        } else {
          this.messageService.add({
            key: 'tc',
            severity: 'error',
            summary: 'Erro',
            detail: 'Palavra não encontrada no sistema',
          });
        }
      });
  }
}
