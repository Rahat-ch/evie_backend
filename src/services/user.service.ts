import { Request, Response } from 'express'
import { WELCOME_MESSAGE } from '../constants/evieApi.constants'
import { User } from "../models/user.model"
import { MongooseDocument } from 'mongoose'

export class UserService {

  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE)
  }

  public getAllUsers(req: Request, res: Response) {
    User.find({}, (error: Error, user: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(user);
    })
  }

  public addNewUser(req: Request, res: Response) {
    console.log(req.body);
    const newUser = new User(req.body);
    newUser.save((error: Error, user: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(user)
    })
  }
}
