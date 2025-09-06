import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:', // in-memory, fresh tiap test
  dropSchema: true,
  entities: [__dirname + '/../src/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormconfig;
