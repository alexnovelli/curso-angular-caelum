export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataEnvio = '';
    id = '';

    constructor ({destinatario, assunto, conteudo, dataEnvio, id}) {
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataEnvio = dataEnvio;
        this.id = id;
    }
}