import { ICategorias } from "./i-categorias";

export interface IServicios {
  id_service: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  category: ICategorias;
}
