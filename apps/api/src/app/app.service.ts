import { Injectable } from '@nestjs/common';
import { Message } from '@ng-config-driven/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
