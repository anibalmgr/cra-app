import { useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function Dropdown({ title, list, onClick, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  function singleValues(element, index, array) {
    //   this function checks if the first indexOf the element in the array is equal to the element's index.
    return array.indexOf(element) === index;
  }

  const singleList = list.filter(singleValues);

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <div
      onClick={handleOpen}
      ref={ref}
      className="flex flex-col content-start relative"
    >
      <div className="text-left rounded py-1 pl-2 pr-8 bg-main-light bg-arrow bg-no-repeat bg-[length:10px_12px] bg-[position:92%_50%]">
        {title}
      </div>

      {isOpen && (
        <div className="absolute top-8 min-w-max flex flex-col gap-2 bg-white py-2 px-1 drop-shadow-2xl">
          {singleList.map((i, id) => (
            <label key={`${i}${id}`} className="flex gap-2">
              <input onClick={onClick} name={type} type="checkbox" value={i} />
              {i}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
