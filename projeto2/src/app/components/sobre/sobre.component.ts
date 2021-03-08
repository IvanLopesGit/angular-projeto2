import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pro2-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  panelOpenState = false;

  @Input() primeiro: string =
    '- O primeiro componente, foi criado tabs, onde estas contém informações de itens do projeto.';

  @Input() segundo: string =
    '- O segundo componente utilizado, são as progress bars, utilizada com intuito apenas de separar os itens com uma animação.';

  @Input() terceiro: string =
    '- O terceiro componente, foi criado um expansion panel, onde dentro dele contém informações do projeto.';

  @Input() terceiro2: string =
    'O texto desse componente, está sendo exibido através de interpolação.';

  @Input() quarto: string =
    '- O quarto componente, foi criado botões onde ao clicar, levam para o LinkedIn e Github de Ivan Lopes.';

  @Input() quinto: string =
    '- No último item do desafio, foi solicitado um vídeo do projeto, porém fiz diferente e hospedei o site no vercel para visualização e testes.';
}
