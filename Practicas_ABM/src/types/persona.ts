import BaseEntity from "./BaseEntity";
/**
 * Interfaz que define la estructura de un objeto persona.
 * Contiene propiedades relacionadas con la información personal de una persona.
 */
export interface persona extends BaseEntity<persona>{
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  adress: string;
  birthdate: string;
}
