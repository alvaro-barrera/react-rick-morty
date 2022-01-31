import { CardListComponent } from "../CardListComponent/CardListComponent";

const HomeComponent = () => {
  return (
    <div>
      <h1 class="title">Rick & Morty Scroll</h1>
      <main class="item-container" id="item-container"></main>
      <div id="request-target"></div>
      <CardListComponent/>
    </div>
  );
};

export { HomeComponent };
