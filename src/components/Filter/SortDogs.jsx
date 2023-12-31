import { useState, useEffect, useRef, useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import { DogDataContext } from "../../context/DogDataContext";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import { IoIosArrowForward } from "react-icons/io";

const options = [
  { label: "Oldest", value: "oldest" },
  { label: "Youngest", value: "youngest" },
];

function SortDogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);
  const divEl = useRef();

  //context
  const { filters } = useContext(FiltersContext);
  const { dogList, setDogList } = useContext(DogDataContext);

  useOutsideClickHandler(divEl, () => {
    setIsOpen(false);
  });

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);

    sortDogs(option);
  };

  useEffect(() => {
    sortDogs(selectedOption);
  }, [filters]);

  const sortDogs = (option) => {
    let sortedDogList = [...dogList];

    if (option.value === "oldest") {
      sortedDogList.sort((a, b) => a.birthdate - b.birthdate);
    } else if (option.value === "youngest") {
      sortedDogList.sort((a, b) => b.birthdate - a.birthdate);
    }
    setDogList(sortedDogList);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-white hover:text-primary-blue-9 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative cursor-pointer">
      <div
        className="flex justify-between items-center gap-[0.8rem] text-primary-blue-9 border-[1.5px] border-primary-blue-9 rounded-3xl px-4 py-1 shadow-xl hover:shadow-orange-shadow"
        onClick={handleClick}
      >
        <p>{selectedOption ? `Sort by: ${selectedOption.label}` : "Sort by"}</p>
        <IoIosArrowForward />
      </div>
      {isOpen && (
        <ul className="absolute w-full text-white rounded-3xl px-5 py-1 mt-3 bg-primary-blue-9 border-white border-[2px]">
          {renderedOptions}
        </ul>
      )}
    </div>
  );
}

export default SortDogs;
