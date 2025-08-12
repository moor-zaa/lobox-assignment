import './App.css'
import MultiDropdownSelect from './components/MultiDropdownSelect/MultiDropdownSelect'
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
    <section className='app'>
      <h1>Demo of MultiDropdownSelect</h1>
      <MultiDropdownSelect
        items={items}
        onChange={handleChange}
        value={[]}
      />
    </section>
  )
}

export default App
