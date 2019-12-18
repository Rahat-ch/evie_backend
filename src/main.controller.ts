import { Application } from 'express';
import { EvieService } from './services/evie.service'

export class Controller {
  private evieService: EvieService;

  constructor(private app: Application) {
    this.evieService = new EvieService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.evieService.welcomeMessage);
  }
}