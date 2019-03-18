import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../app/entities/livro';
import { DestinoPage } from '../destino/destino';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  public livros : Livro[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var l1 = {titulo:'1984', subtitulo: 'O grande irmão esta observando você' , capa: 'dura' , editora: 'Companhia das letras' , autor:'George Orwell', publicacao :'1949', paginas: '328'};
    var l2 = {titulo:'Vade Mecum', subtitulo: 'Vade Mecum Tradicional' , capa: 'dura' , editora: 'Saraiva' , autor:'Saraiva', publicacao :'2018', paginas: '3000'};
    var l3 = {titulo:'O milagre da manhã', subtitulo: 'O segredo para transformar sua vida' , capa: 'dura' , editora: 'BestSeller' , autor:'Hal Elrod', publicacao :'2012', paginas: '232'};
    var l4 = {titulo:'Seja foda!', subtitulo: 'Seja foda' , capa: 'dura' , editora: 'Buzz' , autor:'Caio Carneiro', publicacao :'2017', paginas: '156'};
    var l5 = {titulo:'A sutil arte de ligar o foda-se', subtitulo: 'Estratégia inusitada para melhorar sua vida' , capa: 'dura' , editora: 'Intrinseca' , autor:'Mark Manson', publicacao :'2016', paginas: '321'};
    var l6 = {titulo:'Os segredos da mente Milionaria', subtitulo: 'Aprenda a pensa como um milionario' , capa: 'dura' , editora: 'Sextante/GMT' , autor:'Erker, T. Harver', publicacao :'2010', paginas: '328'};
    this.livros = [l1, l2, l3, l4, l5, l6];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }
  
  irParaDestino(livro:Livro):void{
    this.navCtrl.push(DestinoPage, {livroSelecionado: livro});
  }

}
