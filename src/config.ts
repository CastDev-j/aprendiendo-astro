export type Ruta = {
  path: string;
  nombre: string;
};

export const rutas: Ruta[] = [
  {
    path: "/",
    nombre: "Inicio",
  },
  {
    path: "/secundaria",
    nombre: "Secundaria",
  },
  {
    path: "/formulario",
    nombre: "Formulario",
  },
];
