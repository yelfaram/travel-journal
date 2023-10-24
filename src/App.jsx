import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map((item, index) => {
    return (
      <div key={item.key}>
        <Card 
          {...item}
        />
        {index < data.length - 1 && <hr className="card--hr"/>}
      </div>
    );
  })

  return (
    <div>
      <Navbar />
      <section className="card--list">
        {cards}
      </section>
    </div>
  );
}

export default App
