import express, { Application } from 'express';
import { Controller } from './main.controller';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGO_URI } from './constants/evieApi.constants'

class App {
  public app: Application;

  //declare the controller which handles routes and db logic
  public evieController: Controller;
  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    //create and assign a new instance of our controller
    this.evieController = new Controller(this.app);
  }

  private setConfig() {
    //allows us to recive rquest with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));

    //allows us to review requests with data in x-ww-form-urlencoded format - basically data from an html form 
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    //enables cors
    this.app.use(cors());
  }

  //connecting to our mongodb database
  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true
    })
  }
}

export default new App().app;