import "./HomeComponent.css";
import { CardListComponent } from "../CardListComponent/CardListComponent";

const HomeComponent = () => {
  return (
    <div className="container">
      <h1 class="title">Rick & Morty</h1>
      <main class="item-container" id="item-container"></main>
      <div id="request-target"></div>
      <CardListComponent />

      <div class="pagination">
        <div class="pagination__container">
          <div class="pagination__buttons">
            <ul>
              <li>
                <label for="pagination__step1">1</label>
              </li>
              <li>
                <label for="pagination__step2">2</label>
              </li>
              <li>
                <label for="pagination__step3">3</label>
              </li>
              <li>
                <label for="pagination__step4">4</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeComponent };
