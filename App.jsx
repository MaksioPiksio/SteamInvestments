import { useState } from "react";
import Activity from "./Activity";
import "./App.css";

function App() {
    const [activity, setActivity] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (event) => {
        setTodos((todos) => [
            ...todos,
            { id: todos.length + 1, text: activity },
        ]);

        setActivity("");

        event.preventDefault();
    };

    const handleRemove = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <>
            <div className="w-2/5">
                <form
                    onSubmit={handleSubmit}
                    className="h-auto w-full rounded-t-lg text-center bg-slate-700">
                    <input
                        type="text"
                        id="activity"
                        name="activity"
                        placeholder="Add activity"
                        className="bg-slate-700 w-4/5 text-center rounded"
                        value={activity}
                        onChange={(event) => setActivity(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-1/5 text-gray-300 bg-slate-900 rounded hover:bg-slate-950 hover:text-gray-50">
                        Submit
                    </button>
                </form>
                <div>
                    {todos.map((todo, idx) => (
                        <div key={idx} className="flex gap-2">
                            <Activity
                                activity={todo}
                                handleRemove={handleRemove}
                                idx={idx}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
