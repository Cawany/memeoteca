import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  listarPensamentoFav(paginaAtual: number, filtro: string, favoritos: boolean) {
    throw new Error('Method not implemented.');
  }
  private readonly API: string = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  public listar(
    pagina: number,
    filtro: string,
    favoritos: boolean
  ): Observable<Pensamento[]> {
    const itensPorPag = 6;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPag);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    if (favoritos) {
      params = params.set('favorito', true);
      console.log(favoritos)
    }

    //GET /posts?_page=7&_limit=20
    // return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_ limit=${itensPorPag}`);

    return this.http.get<Pensamento[]>(this.API, { params: params });
  }

  // public listarPensamentoFav (
  //   pagina: number,
  //   filtro: string
  // ): Observable<Pensamento[]> {
  //   const itensPorPag = 6;

  //   let params = new HttpParams()
  //     .set('_page', pagina)
  //     .set('_limit', itensPorPag)
  //     .set('favorito', true);

  //   if (filtro.trim().length > 2) {
  //     params = params.set('q', filtro);
  //   }

  //   return this.http.get<Pensamento[]>(this.API, { params: params });
  // }

  public create(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  public mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    //assim
    // const url = `${this.API}/${pensamento.id}`;
    // return this.http.put<Pensamento>(url, pensamento);

    //ou assim
    return this.editar(pensamento);
  }

  public excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  public buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
