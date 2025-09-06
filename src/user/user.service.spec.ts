import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository, // pakai mock repo
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const user = {
      id: 'uuid',
      name: 'Bruce Wayne',
      email: 'bruce@wayneenterprises.com',
      password: 'hashed',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;

    jest.spyOn(repo, 'save').mockResolvedValue(user);

    const result = await service.create({
      name: 'Bruce Wayne',
      email: 'bruce@wayneenterprises.com',
      password: 'batman123',
    });

    expect(result.email).toEqual('bruce@wayneenterprises.com');
    expect(repo.save).toHaveBeenCalled();
  });
});
