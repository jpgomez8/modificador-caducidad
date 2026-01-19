import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient) {}

  actualizarFechaCaducidadPassword(userId: string, fechaCaducidad: string) {
    return this.http.patch(
      `${this.apiUrl}/${userId}/actualizar-caducidad-password`,
      { fechaCaducidad }
    );
  }
}
