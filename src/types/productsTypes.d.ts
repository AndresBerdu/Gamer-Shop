export interface ProductInterface {
  name: string;
  description: string;
  image: string | undefined; //Only is null when the object is initialized
}
