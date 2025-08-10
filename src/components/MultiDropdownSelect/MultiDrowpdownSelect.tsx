import { useRef, useState, type ChangeEvent } from "react";

interface MultiDropdownSelectProps {
    items: string[];
    onChange: (selectedItems: string[]) => void
}

const MultiDropdownSelect: React.FC<MultiDropdownSelectProps> = ({ items, onChange }) => {

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filteredItems, setFilteredItems] = useState<string[]>(items);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const filtered = items.filter((item: string) => item.includes(value.toLowerCase()));
        setFilteredItems(filtered)
    }

    const handleRemoveItem = (value: string) => {
        const newSelectedItems = selectedItems.filter(item => item !== value);
        setSelectedItems(newSelectedItems);
        onChange(newSelectedItems)
    }

    return (
        <div className="multi-select" ref={dropdownRef}>
            <div className="multi-select__input-wrapper">
                <div className="multi-select__selected-items">
                    {selectedItems.map((item: string) => <div key={item} className="multi-select__selected-item">
                        {item}
                        <span className="multi-select__remove-item" onClick={() => handleRemoveItem(item)}>x</span>
                    </div>)}
                </div>
                <input type="text"
                    className="multi-select__input"
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default MultiDropdownSelect