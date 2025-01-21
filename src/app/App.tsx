import { Todo } from "../widgets/todo/Todo";

const App = () => {
  return (
    <div className="min-h-screen font-roboto bg-body">
      <div className="max-w-2xl mx-auto p-5 flex flex-col gap-5 items-center">
        <header>
          <h1 className="text-7xl text-title">todos</h1>
        </header>
        <Todo />
      </div>
    </div>
  );
};

export default App;
