import './App.css'
import MultiDropdownSelect from './components/MultiDropdownSelect/MultiDrowpdownSelect'
import './styles/main.scss'

function App() {

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
    console.log(selectedItems);

  }

  return (
    <>
      <MultiDropdownSelect
        items={items}
        onChange={handleChange}
        value={[]}
      />
    </>
  )
}

export default App
