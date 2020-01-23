import {Injectable} from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProdutoService{

    constructor(private http:HttpClient){}

    protected UrlServiceV1 : string = "http://localhost:3000/";

    obterProdutos() : Observable<Produto[]>{
       return this.http
        .get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}