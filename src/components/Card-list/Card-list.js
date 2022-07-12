
import Card from "../Card/Card";
import './Card-list.css'


const CardList = ({ monsters }) => (
  <div className="card-list">
    {
      monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />
      })
    }
  </div>
)


export default CardList