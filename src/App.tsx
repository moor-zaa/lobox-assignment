import { useState } from 'react'
import './App.css'
import MultiDropdownSelect from './components/MultiDropdownSelect/MultiDropdownSelect'
import './styles/main.scss'

function App() {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [secondSelectedItems, setSecondSelectedItems] = useState<string[]>([])


  const items: string[] = [
    "Real Madrid 🤍",
    "Chelsea 💙",
    "Barcelona 🏮",
    "Liverpool 🔴",
    "Arsenal ❤️",
    "Milan 🖤",
    "Juventus 🐻‍❄️",
    "Inter 🫐",
    "Manchester United 😈",
    "Bayern Munich ⭕"
  ]



  const handleChange = (selectedItems: string[]) => {
    setSelectedList(selectedItems);
    setSecondSelectedItems(selectedItems)
  }

  const handleUpdateSecond = (selectedItems: string[]) => {
    setSecondSelectedItems(selectedItems);
  }


  return (
    <section className='app'>
      <h1>First</h1>
      <MultiDropdownSelect
        items={items}
        onChange={handleChange}
        value={selectedList}
      />

      <h2>
        Second
      </h2>
      <MultiDropdownSelect items={items} value={secondSelectedItems} onChange={handleUpdateSecond} />
    </section>
  )
}

export default App
