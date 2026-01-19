import { Controller, Patch, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { ActualizarCaducidadDto } from './dto/actualiza-caducidad.dto';

@Controller('usuarios')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch(':id/actualizar-caducidad-password')
  actualizarCaducidadPassword(
    @Param('id') id: string,
    @Body() body: ActualizarCaducidadDto,
  ) {
    return this.usersService.actualizarFechaCaducidadPassword(
      id,
      body.fechaCaducidadPassword,
    );
  }
}
