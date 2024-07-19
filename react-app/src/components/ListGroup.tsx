// {itmes: [], headings: string}
interface ListGroupProps {
  items: string[];
  heading: string;
}

//import { Fragment } from "react";

import { useState } from "react";

function ListGroup({ items, heading }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              console.log(item, index), setSelectedIndex(index);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

/**You can also use the import library to use the tags <Fragment> */
