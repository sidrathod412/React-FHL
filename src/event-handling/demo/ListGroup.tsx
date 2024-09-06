import { useState } from "react";

interface Props{
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props) {
    
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleSelect = (index: number) =>{
        setSelectedIndex(index)
        onSelectItem(items[index])
    }

    return (
        <>
        <h1>{heading}</h1>
        { items.length === 0 && <p>No items to display</p>}
        <ul className="list-group">
            {items.map((item,index) => 
                <li key={item} onClick={() => handleSelect(index)} 
                    className={selectedIndex == index ? "list-group-item active" : "list-group-item"}>
                    {item}
                </li>)}
        </ul>
        </>
    )
}

export default ListGroup;