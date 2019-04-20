import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  environment
} from 'src/environments/environment';
import {
  Email
} from '../models/email';
import {
  map
} from 'rxjs/operators';
import {
  Observable
} from 'rxjs';

@Injectable()

export class EmailService {

  private readonly url = environment.api + '/emails';
  private readonly cabecalho = new HttpHeaders({
    'Authorization': localStorage.getItem('cmail-token')
  });

  constructor(private http: HttpClient) {}

  criaDto(emailIngles): Email {
    return new Email({
      destinatario: emailIngles.to,
      conteudo: emailIngles.content,
      assunto: emailIngles.subject,
      dataEnvio: emailIngles.created_at,
      id: emailIngles.id
    })
  }

  enviar(email: Email): Observable < Email > {

    const emailDto = {
      to: email.destinatario,
      subject: email.assunto,
      content: email.conteudo
    }

    return this.http
      .post(this.url, emailDto, {
        headers: this.cabecalho
      })
      .pipe(
        map(
          emailApi => this.criaDto(emailApi)
        )
      );
  }

  carregar(): Observable < Email[] > {
    return this.http
      .get < any[] > (this.url, {
        headers: this.cabecalho
      })
      .pipe(
        map(listaemailsApi =>
          listaemailsApi.map(emailApi => this.criaDto(emailApi))
        )
      )
  }

  apagar(emailId):Observable<object> {
    return this.http.delete(`${this.url}/${emailId}`, {headers: this.cabecalho})
  }

}
