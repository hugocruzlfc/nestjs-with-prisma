import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  describe('getPostById', () => {
    it('should return a post', () => {
      const result = appController.getPostById('1');
      expect(result).toEqual({
        id: '1',
        title: 'Post 1',
        content: 'Content 1',
      });
    });
  });
});
