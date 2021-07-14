import { Counter } from "../../components/Counter";
import { TodoList } from "../../components/TodoList";
import "./styles.scss";

const Home = () => {
  console.log("Render Home");
  return (
    <div id="home">
      <h1>Introdução ao React</h1>

      <Counter />
      <TodoList />
    </div>
  );
};

// export default Home;
export { Home }; // export named (preferencia)
