import "./MultiDrowpdownSelect.scss"

import { memo, useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";


const CheckIcon = memo(() => <div className="check-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
    </svg>
</div>)

const ArrowDownIcon = memo(() => <div className="arrow-down-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"></path>
    </svg>
</div>)

interface MultiDropdownSelectProps {
    items: string[];
    onChange: (selectedItems: string[]) => void;
    value?: string[];
}

const MultiDropdownSelect: React.FC<MultiDropdownSelectProps> = ({ items, onChange, value = [] }) => {

    const [selectedItems, setSelectedItems] = useState<string[]>(value);
    const [inputValue, setInputValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const filteredItems = useMemo(() => items.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())), [inputValue, items]);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpdate = useCallback((updatedItems: string[]) => {
        setSelectedItems(updatedItems);
        onChange(updatedItems);
    }, [onChange]);

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const newItem = inputValue.trim();

        if (e.key === 'Enter' && newItem) {
            if (!selectedItems.includes(newItem)) {
                const newSelectedItems = [...selectedItems, newItem];
                handleUpdate(newSelectedItems);
            }
            setInputValue('');

        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const handleRemoveItem = (e: any, value: string) => {
        e.stopPropagation();
        e.preventDefault();
        const newSelectedItems = selectedItems.filter(item => item !== value);
        handleUpdate(newSelectedItems);
    }

    const handleSelectItem = (e: any, value: string) => {
        e.stopPropagation();
        e.preventDefault();
        if (!selectedItems.includes(value) && value.trim().length > 0) {
            const newSelectedItems = [...selectedItems, value.trim()];
            handleUpdate(newSelectedItems);
        }

        if (inputValue) setInputValue('')
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])


    return (
        <div className="multi-select" ref={dropdownRef}>
            <div className={`multi-select__input-wrapper ${isOpen ? 'multi-select__input-wrapper--active' : ''}`}>
                <input type="text"
                    className="multi-select__input"
                    ref={inputRef}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    placeholder="Select or Add ..."
                    onFocus={() => setIsOpen(true)}
                />
                <div className="multi-select__arrow-icon" style={{ rotate: isOpen ? '180deg' : '0deg', marginTop: isOpen ? 0 : 4 }}>
                    <ArrowDownIcon />
                </div>
            </div>
            {isOpen && <div className="multi-select__dropdown">
                {selectedItems.map((item: string) => <div key={item} onClick={(e) => handleRemoveItem(e, item)}
                    className="multi-select__dropdown-item selected-item">
                    {item}
                    <CheckIcon />
                </div>)}
                {items.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()) && !selectedItems.includes(item)).map((item: string) => <div key={item} className="multi-select__dropdown-item"
                    onClick={(e) => handleSelectItem(e, item)}
                >
                    {item}
                </div>)}
                {inputValue && !filteredItems.includes(inputValue) && <div className="multi-select__dropdown-item new-item"
                    onClick={(e) => handleSelectItem(e, inputValue)}
                >
                    Add {inputValue}
                </div>}
            </div>}
        </div>
    )
}

export default memo(MultiDropdownSelect)