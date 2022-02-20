export interface Menu {
    bebidas?: Bebida[];
    postres?: Postre[];
    principal?: Principal[];
  }
  
  export interface Bebida {
    descripcion?: string;
    nombre?: string;
    precio?: string;
    url?: string;
  }
  export interface Postre {
    descripcion?: string;
    nombre?: string;
    precio?: string;
    url?: string;
  }
  export interface Principal {
    descripcion?: string;
    nombre?: string;
    precio?: string;
    url?: string;
  }