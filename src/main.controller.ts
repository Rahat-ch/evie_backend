import { Application } from 'express';
import { UserService } from './services/user.service'

export class Controller {
  private userService: UserService;

  constructor(private app: Application) {
    this.userService = new UserService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.userService.welcomeMessage);
    this.app.route('/users').get(this.userService.getAllUsers);
    this.app.route('/user').post(this.userService.addNewUser);
  }
}