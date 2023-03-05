// Interfaz de category para manejar el objeto
export interface Category {
  id: string;
  name: string;
  image: string;
}


export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];

}
