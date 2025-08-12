# MultiDropdownSelect Component

A reusable, accessible multi-select dropdown component built with **React**, **TypeScript**, and **SCSS**.  
Supports selecting multiple items, adding new items by typing and pressing **Enter**, and keyboard navigation (ArrowUp, ArrowDown, Enter, Esc).  
Dropdown closes when clicking outside.

---

## ✨ Features

- **Multi-select**: Select multiple options from a provided list.
- **Add new options**: Type in the input and press **Enter** to add custom items.
- **Keyboard accessibility**:
  - ArrowUp / ArrowDown → Navigate options
  - Enter → Select highlighted option
  - Esc → Close dropdown
- **Close on outside click**
- **Custom placeholder** text
- **SCSS styling** with BEM naming
- **Reusable** in different contexts

---

## Usage

```tsx
import React, { useState } from "react";
import MultiDropdownSelect from "./MultiDropdownSelect";

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const handleChange = (newSelected: string[]) => {
    setSelectedItems(newSelected);
    console.log("Selected items:", newSelected);
  };

  return (
    <section className="app">
      <h1>Demo of MultiDropdownSelect</h1>
      <MultiDropdownSelect
        items={items}
        onChange={handleChange}
        value={selectedItems}
        placeholder="Select or Add..."
      />
    </section>
  );
};

export default App;
```

--- 


### Clone or copy the component into your project
### Ensure you have React, TypeScript, and SCSS set up

---

### 🪧 Demo

See demo on https://multi-dropdown-select-tau.vercel.app/