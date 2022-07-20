import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';


@Module({
  imports : [
    MongooseModule.forRoot('mongodb+srv://Crud_operation_Nest_JS:WmoT3jnhNpOHcFC8@cluster0.bjo8je2.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
