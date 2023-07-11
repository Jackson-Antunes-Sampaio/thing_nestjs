import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//EXECUTAR: npm run start:dev
//CRIAR CRUD: nest g resource things
//GERAR node_modules : npx prisma generate
//GERAR E ATUALIZAR BANCO DE DADOS: npx prisma db push
// VISÃO PARA FRONT DATABASE: npx prisma studio

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
