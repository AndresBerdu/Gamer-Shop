import { useEffect, useState } from "react";

interface ProductInterface {
  id: number;
  name: string;
  description: string;
  image: File | null; //Only is null when the object is initialized
}

export const AddProductPage = () => {
  //Hooks to save the products
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [product, setProduct] = useState<ProductInterface>({
    id: 0,
    name: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    console.log(products);
  }, [products]);

  //Function for capture info from each input
  const handleOnchageProduct = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;

    //With this hook the info It will add dinamically to each property from object
    //Use if to comparete if the name of event is type image
    if (name === "image" && e.target instanceof HTMLInputElement) {
      const image = e.target.files ? e.target.files[0] : null; //Save value of the image

      setProduct((prev) => ({
        ...prev,
        image,
      }));
    } else {
      const value = e.target.value; //Save value of the event

      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  //Funtion for add each product to array
  const handleOnclickAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    //Function from the same event to prevent the page don't reload when user do click
    e.preventDefault();

    setProducts((prev) => [...prev, product]);
  };

  return (
    <div className="h-full">
      {/* This section is to user will add the info about of product */}
      <section className="m-5">
        <form onSubmit={handleOnclickAddProduct}>
          <div className="flex flex-col mb-3">
            <label className="capitalize text-gray-900 mb-2" htmlFor="">
              name product:
            </label>
            <input
              className="outline-1 outline-blue-500 rounded-sm px-3 py-2"
              name="name"
              onChange={handleOnchageProduct}
              type="text"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="capitalize text-gray-900 mb-2" htmlFor="">
              description product:
            </label>
            <textarea
              className="outline-1 outline-blue-500 rounded-sm px-3 py-2 h-30 resize-none"
              name="description"
              onChange={handleOnchageProduct}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="capitalize mb-2" htmlFor="">
              image product:
            </label>
            <input
              className="outline outline-blue-500 py-2 px-3 rounded-sm"
              name="image"
              onChange={handleOnchageProduct}
              type="file"
            />
          </div>
          <button
            className="capitalize bg-blue-500 text-white font-bold rounded-sm py-2 px-3 inline-block w-full"
            type="submit"
          >
            add product
          </button>
        </form>
      </section>

      {/* It show the elements previusly added the user */}
      <section>
        {products.length > 0 ? (
          <div>
            {products.map((pro) => (<div>
              <h2>{pro.name}</h2>
              <p>{pro.description}</p>
              <img src={URL.createObjectURL(pro.image)}/>
            </div>))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h2>no products</h2>
          </div>
        )}
      </section>
    </div>
  );
};
