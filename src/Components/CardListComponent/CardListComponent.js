import "./CardListComponent.css";
import useTodos from "../../useTodos";

const CardListComponent = () => {
  const [todos, error] = useTodos();
  let info = todos ? todos.info : [];
  let results = todos ? todos.results : [];

  return (
    <ul className="cards">
      {results.map((item) => {
        return (
          <li>
            <a href="" className="card">
              <img src={item.image} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={item.image} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">{item.name}</h3>
                    <span className="card__status">
                      {item.species} ({item.status})
                    </span>
                  </div>
                </div>
                <p className="card__description">
                  <strong>Location:</strong>{" "}
                  {item.location.name ? item.location.name : "?"}
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { CardListComponent };
