class Producto {
    static contadorProductos = 0;
    constructor(img,nombre,precio,descripcion){
        this._idProducto = ++Producto.contadorProductos;
        this._img = img;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;
    }
}


const productos = [
      new Producto('/png','Computadora',$1500,'Computadora con ryzen 5, 16gb de ram y 480gb disco solido'),     
      new Producto('/png','Soldadora',$700,'Soldadora Inverter Lusqtoff Mma-tig Iron100+masc+elect+escua'),
      new Producto('/png','SmartWatch',$100,'Smartwatch Reloj Inteligente T900 Pro Max L Para Android'),
      new Producto('/png','Ampliador de pantalla',$250,'Ampliador De Pantalla 3d Tipo Lupa Para Celular Soporte Cine'),     
      new Producto('/png','Celular',$400,'Samsung Galaxy A54 5G 5G 256 GB awesome graphite 8 GB RAM') 
];
