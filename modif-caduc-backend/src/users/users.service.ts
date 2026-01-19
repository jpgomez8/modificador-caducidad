import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async actualizarFechaCaducidadPassword(userId: string, fecha: string) {
    if (!isValidObjectId(userId)) {
      throw new BadRequestException('ID inválido');
    }

    const fechaFinal = new Date(fecha);

    if (isNaN(fechaFinal.getTime())) {
      throw new BadRequestException('Fecha inválida');
    }

    const usuario = await this.userModel.findByIdAndUpdate(
      userId,
      { fechaCaducidadPassword: fechaFinal },
      { new: true },
    );

    if (!usuario) {
      throw new BadRequestException('Usuario no encontrado');
    }

    return usuario;
  }
}
