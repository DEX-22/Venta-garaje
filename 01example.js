var app = new Vue({
    el: '#app',
    data: {
        Saludo: 'Bienvenido a la venta de garage',
        Product: 'Bicicleta OXF Aro 26 Kenda',
        Imagen: 'Imagenes/bici1.jpg',
        Cantidad:  10, 
        inStock: true,
        onSale: true,
        Details: {
            Marca :	'JEFF BIKE',
            Aro:    	26,
            Modelo:	'OXF26G-9R',
            Asiento:	'Aluminio',
            Hecho:	'China',
            Llantas	:'Unisex',
            Manubrio:	'Aluminio',
        },
        Variant:[
            {variantId: 01,
            variantColor: '#FDA7DF',
            variantImage: 'Imagenes/bici1.jpg'},
            {variantId: 02,
            variantColor: '#12CBC4',
            variantImage: 'Imagenes/bici3.jpg'},
            {variantId: 03,
                variantColor: '#f39c12',
                variantImage: 'Imagenes/bici2.jpg'},
            {variantId: 04,
                variantColor: '#8e44ad',
                variantImage: 'Imagenes/bici4.jpg'},
                
            ],
        car: 0,
        },
    methods:{
            addToCar: function (){
                if(this.inStock && this.Cantidad > 0){
                    
                    this.car += 1;
                    this.Cantidad -=1;
                        this.inStock = true;
                    }else{
                             this.inStock = false;
                        alert('no hay mas productos :(');
                    }
                
            },
            quitFromCar: function() {
                if(this.car > 0){this.car -= 1;this.Cantidad+=1
                    if(this.Cantidad > 0){ this.inStock = true}
                }else{ alert('no hay elementos en el carrito');}
             
            },
            updateProduct: function(_variantImage){
                this.Imagen = _variantImage
            },
            outOfStock: function(){
                if (this.inStock) {
                   
                   // return _elemento.classList.toggle('active');
                } else {
                    document.querySelector('#etiqueta-stock').classList.toggle('no-stock');
                }
            }
            
        },
})
