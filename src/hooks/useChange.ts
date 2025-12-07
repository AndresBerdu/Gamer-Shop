import { useState } from "react";

export const useChange = <T extends object>(initialState: T) => {
  const [data, setData] = useState<T>(initialState);

  const handleChangeInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    data,
    handleChangeInputs,
  };
};
