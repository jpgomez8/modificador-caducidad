import { IsDateString } from 'class-validator';

export class ActualizarCaducidadDto {
  @IsDateString()
  fechaCaducidadPassword: string;
}
