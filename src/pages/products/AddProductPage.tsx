export const AddProductPage = () => {
  return (
    <div>
      <h1>add product</h1>
      <form action="">
        <div className="flex">
          <label>name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="flex">
          <label>category:</label>
          <select name="category" required>
            <option value="appliance">appliance</option>
            <option value="home">home</option>
            <option value="food">food</option>
          </select>
        </div>
        <div className="flex">
          <label>description:</label>
          <textarea name="description" required/>
        </div>
        <div className="flex">
          <label>image:</label>
          <input type="file" name="file" required/>
        </div>
      </form>
    </div>
  );
};
