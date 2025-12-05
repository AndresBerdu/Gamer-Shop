//react-router
import { useNavigate } from "react-router";

//types
import type { OptionsInterface } from "../../../../types/dropDownTypes";

export const DropdownList = ({
  list,
  open,
  toggle,
}: {
  list: OptionsInterface[];
  open: boolean;
  toggle: () => void;
}) => {

  //hook for use redirect links
  const navigate = useNavigate();

  //function to close and redirect to especific page
  const handleCloseList = () => {
    toggle();
    navigate("/");
  };

  return (
    <>
      {open && (
        <div className="static xl:absolute left-0 top-10 xl:bg-white xl:text-[#474747] overflow-y-auto">
          <ul className="w-50 border-l border-l-white xl:shadow-2xl">
            {/* we iterate in list options to show options */}
            {list.map((option) => (
              <li
                key={option.name}
                onClick={handleCloseList}
                className="flex cursor-pointer items-center gap-3 px-3 py-2 my-2 hover:text-[#df19df] ease-in transition"
              >
                <img className="w-6 h-6 object-cover filter brightness-0 invert xl:filter-none" src={option.icon} />
                <p>{option.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
