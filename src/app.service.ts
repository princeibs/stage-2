import { Injectable } from '@nestjs/common';
import ResInterface from './user/interfaces/res.interface';

@Injectable()
export class AppService {
  getHello(): ResInterface {
    return {
      statusCode: 200,
      message: 'Welcome. Use \'/api/<user_id>\' to get user details. e.g /api/64ff2e0c12026e52789bb05d'
    };
  }
}
