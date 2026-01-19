import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Title } from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: "app-modificador-caducidad",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./modificador-caducidad.component.html",
  styleUrls: ["./modificador-caducidad.component.css"],
})
export class ModificadorCaducidadComponent {
  userId: string = "";
  fechaCaducidad: string = "";

  @ViewChild("userIdInput") userIdInput!: ElementRef<HTMLInputElement>;

  constructor(
    private userService: UserService,
    private title: Title
    ) {
      this.title.setTitle("Modificador de Caducidad de Contraseña");
      const anio = new Date().getFullYear();
      this.fechaCaducidad = `${anio}-12-31`;
    }

  modificarCaducidad() {
    if (!this.userId || !this.fechaCaducidad) 
    {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Debe ingresar el ID del usuario y seleccionar una fecha.',
        confirmButtonText: 'Aceptar',
      });
      
      return;
    }

    this.userService.actualizarFechaCaducidadPassword(this.userId, this.fechaCaducidad).subscribe({
      next: () => {
        
        Swal.fire({
          icon: "success",
          title: "Actualizado",
          text: "La fecha de caducidad fue actualizada correctamente",
          timer: 1500,
          background: "FFFFFF",
          color: "#222",
          confirmButtonColor: "#3b82f6",
        }).then(() => {
            this.userId = "";
            this.userIdInput.nativeElement.blur();
            this.userIdInput.nativeElement.focus();
        });
      },
      error: () => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo actualizar la fecha de caducidad",
          confirmButtonText: "Cerrar",
        });
      },
    });
  }
}
