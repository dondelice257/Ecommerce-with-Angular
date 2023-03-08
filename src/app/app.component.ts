import { Component } from '@angular/core';

@Component({
  selector: 'app-root-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string= 'Shopping'
  isVisible :boolean = false
  isAdded :boolean= false
  list :any = [
  
      {
        name: 'Tecno Spark',
        icon: '<i class="fas fa-mobile-alt"></i>',
        price: 120,
        quantity : 2
      },
      {
        name: 'iPhone 13',
        icon: '<i class="fas fa-mobile-alt"></i>',
        price: 400,
        quantity : 1
      },
      {
        name: 'PlayStation 5',
        icon: '<i class="fas fa-gamepad"></i>',
        price: 310,
        quantity : 1
      },
      {
        name: 'Playstation 3',
        icon: '<i class="fas fa-gamepad"></i>',
        price: 270,
        quantity : 1
      },
      {
        name: 'MacBook',
        icon: '<i class="fas fa-laptop"></i>',
        price: 410,
        quantity : 1
      },
      {
        name: 'Dell',
        icon: '<i class="fas fa-laptop"></i>',
        price: 270,
        quantity : 1
      },
      {
        name: 'Nike',
        icon: '<i class="fas fa-shoe-prints"></i>',
        price: 30,
        quantity : 1
      },
      {
        name: 'Adidas ',
        icon: '<i class="fas fa-shoe-prints"></i>',
        price: 20,
        quantity : 1
      },
      {
        name: 'Sony ',
        icon: '<i class="fas fa-headphones"></i>',
        price: 200,
        quantity : 1
      },
      {
        name: 'ipad',
        icon: '<i class="fas fa-headphones"></i>',
        price: 45,
        quantity : 1
      },
      {
        name: 'headphone',
        icon: '<i class="fas fa-headphones"></i>',
        price: 15,
        quantity : 1
      },
      {
        name: 'S headphone',
        icon: '<i class="fas fa-headphones"></i>',
        price: 10,
        quantity : 1
      }
    
    
  ];
  listCart :any = [];
  quantity : number = 15;

addIt(item:any){
  item.quantity++
}
minusIt(item: any){
  if(item.quantity>0){
  item.quantity--

  }
  
  else if(item.quantity<1){
    this.listCart.splice(item, 1)
  }
  
  
}
added(){
    this.isAdded=!this.isAdded
}
 
  addToCart(i:any){
if(this.listCart.includes(this.list[i])){
alert('This item has already been added in the cart')


}
else if(this.listCart.length>=6){
  alert("You can't buy more than 6 products at once")
}
else if(this.isVisible==true && this.listCart.length>0 ){
  alert('Please buy what you have selected or close the cart in order to continue')
}
else if(this.isVisible==true && this.listCart.length<=0){
  alert('You cannot select the product if the cart is open, please close it and select products to buy')
}
else{
 if(confirm(`Do you want to add ${this.list[i].name} in the cart ?`)){
  this.listCart.push(this.list[i])
  alert(`${this.list[i].name} is going to be added in the cart`)
  
 }
 else{
  alert('The transaction has been removed')
 }
  

}
  }
  removeItem(index:any){
   this.listCart.splice(this.listCart[index], 1)
  }

  getTotal() {
    var total = 0;
    for (let item of this.listCart) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
    
  }
  showCart(){
    this.isVisible=!this.isVisible
  };
  buy(){
    if(this.listCart.length>1){
    alert(`You buy ${this.listCart.length}  products  at ${this.getTotal()}`)

    }
    else{
    alert(`You buy ${this.listCart.length} product  at ${this.getTotal()}`)

    }
    
  }
 
  


 


  
   

  
}


