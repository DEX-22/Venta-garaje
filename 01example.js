Vue.component('product-review',{
    template:`


    
        <input v-model="name">
    `,
    data(){
        return {
        name: null, 
        }
    },

})
Vue.component('Details',{
    
    template:`<ul>
             <li v-for="(name, value) in Details"><b>{{value}}</b>: {{name}}</li>
              </ul>`,
    data(){
        return{
            Details:{
                        Marca :	'JEFF BIKE',
                        Aro:    	26,
                        Modelo:	'OXF26G-9R',
                        Asiento:	'Aluminio',
                        Hecho:	'China',
                        Llantas	:'Unisex',
                        Manubrio:	'Aluminio',
                    },
                }
            },
    
        })


Vue.component('producto', {
    props:{
        premium:{
            type: Boolean,
            required: true
        },
        car:{
            type: Array,
        },
        
    },
    template: `<div id="container">
            
        <div class="nav-bar">
        <center><h1 id="et">{{saludo_navbar}}</h1></center>
        </div>




        <div class="product" id="producto">
            

            <div class="product-image">
                <img v-bind:src="image" alt="esta es la imagen del primer producto">
            </div>


                        <div class="product-info">
                            <h2>{{Product}}</h2> 
                            <p id="etiqueta-stock"
                                class="active">
                                Quedan {{Cantidad}} unidades 
                            </p>
                            <p style="text-align: left;">Shipping: {{shipping}}</p>
                            <p v-if="Cantidad>=10">In stock</p>
                            <p v-else-if="Cantidad > 0 && 10 > Cantidad">Ultimos productoos!!</p>
                            <p v-else> Out of stock</p>
                            <h5> Caracteristicas:</h5>
                            <Details></Details>


                                        <div class="color">Color 
                                            
                                                <div v-for="(variante, index) in Variant" 
                                                    :key="variante.variantId"
                                                    class="color-box" 
                                                    :style="{ backgroundColor: variante.variantColor }"
                                                    @mouseover="updateProduct(index)">
                                                </div>
                                        </div>
                            
                        <!--en vue.js para llamar al evento click hay 2 formas:-->    
                                        
                        <!-- la primera --><button class="btn "
                                                v-on:click="addToCar"
                                                :disabled="!inStock"
                                                :class="{ 'btn-desactivado':!inStock }">
                                                Add to car</button>


                                       

                                            <!-- la 2da -->
                                            <div @click="quitFromCar" style="cursor: pointer"> Quitar</div>
                                            
                                        
                            
                        </div>
            </div>
        </div>`,
    data() {
        return  {
            Saludo:  'Bienvenido a la venta de garaje',
            Product: 'Bicicleta OXF Aro 26 Kenda',
            selectedVariant: 0,
            onSale: true,
            Variant:[
                {variantId: 01,
                variantColor: '#FDA7DF',
                variantImage: 'Imagenes/bici1.jpg',
                variantCantidad: 4,},
    
                
                {variantId: 02,
                variantColor: '#12CBC4',
                variantImage: 'Imagenes/bici3.jpg',
                variantCantidad: 8,},
                
                {variantId: 03,
                    variantColor: '#f39c12',
                    variantImage: 'Imagenes/bici2.jpg',
                    variantCantidad: 20,},
                
                {variantId: 04,
                    variantColor: '#8e44ad',
                    variantImage: 'Imagenes/bici4.jpg',
                    variantCantidad: 0,},
                    
                ],}
            },
    methods:{
        addToCar: function (){
            if(this.inStock && this.Variant[this.selectedVariant].variantCantidad > 0){
            this.$emit('add-to-car',this.Variant[this.selectedVariant].variantId);
            this.Variant[this.selectedVariant].variantCantidad -=1
            }else{
                    this.inStock = false;
                alert('no hay mas productos :(');
            }
        },
          
         quitFromCar: function() {
           if(this.car.length > 0) 
           {   
              
            this.Variant[this.selectedVariant].variantCantidad +=1
            
           }
           else {
            this.$emit('quit-from-car', this.Variant[this.selectedVariant].variantId )

            alert('no hay elementos en el carrito')}
         },    
        
        updateProduct: function(i){
            this.selectedVariant = i;
            console.log(i);
        },
        outOfStock: function(){
            if (this.inStock) {
            
            // return _elemento.classList.toggle('active');
            } else {
                document.querySelector('#etiqueta-stock' ).classList.toggle('no-stock');
            }            
        },
         
    },
    computed: {
        saludo_navbar(){
            return this.Saludo+' 2021';
        },
        image(){
            return  this.Variant[this.selectedVariant].variantImage
        },
        inStock(){
        return this.Variant[this.selectedVariant].variantCantidad > 0 ? true : false   
        },
        Cantidad(){
            return this.Variant[this.selectedVariant].variantCantidad //- this.car             
        },
        enVenta(){
        return onSale ? this.Product : '' 
        },
        shipping(){            
            return this.premium ? '50%free' : 299.99
        },
        
    } 

})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        car: [],
    },
    methods:{
        updateCar(id){
            this.car.push(id)
        },
        removeElement(id){
            this.car.splice(id,1)
            this.Variant[id].variantCantidad -=1
}       
       
    }

})



