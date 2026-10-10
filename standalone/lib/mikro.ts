/** Mikro Fly entegrasyon sınırı. Gerçek servis yolları, kimlik doğrulama ve veri alanları
 * Mikro Fly API sürümü doğrulanmadan varsayılmamalıdır. */
export type Product={id:string;code:string;name:string;category:string;unit:"Adet"|"Koli";price:number;emoji:string};
export type OrderLine={productId:string;quantity:number};
export type CreateOrder={customerCode:string;externalId:string;deliveryDate:string;lines:OrderLine[]};
export interface MikroFlyGateway{
  listProducts(customerCode:string):Promise<Product[]>;
  submitOrder(order:CreateOrder):Promise<{erpOrderId:string}>;
}
export const sampleProducts:Product[]=[
{id:"1",code:"KR-001",name:"Sade Kruvasan",category:"Kruvasan",unit:"Adet",price:45,emoji:"🥐"},
{id:"2",code:"KR-002",name:"Çikolatalı Kruvasan",category:"Kruvasan",unit:"Adet",price:55,emoji:"🥐"},
{id:"3",code:"EK-001",name:"Çikolatalı Ekler",category:"Pastalar",unit:"Adet",price:35,emoji:"🍫"},
{id:"4",code:"BR-001",name:"Su Böreği",category:"Börekler",unit:"Adet",price:85,emoji:"🥧"},
{id:"5",code:"PS-001",name:"Yaş Pasta",category:"Pastalar",unit:"Adet",price:420,emoji:"🎂"},
{id:"6",code:"PG-001",name:"Simit Poğaça",category:"Poğaçalar",unit:"Adet",price:25,emoji:"🥯"}
];
export const demoGateway:MikroFlyGateway={
async listProducts(){return sampleProducts;},
async submitOrder(){throw new Error("Gerçek Mikro Fly bağlantısı henüz etkin değil");}
};
