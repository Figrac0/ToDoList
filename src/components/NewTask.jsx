import { useRef, useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");
    const inputRef = useRef();

    function handleChange(event) {
        setEnteredTask(event.target.value);

        if (inputRef.current) {
            inputRef.current.classList.remove("bg-red-200");
        }
    }

    function handleClick() {
        if (enteredTask.trim().length === 0) {
            inputRef.current.classList.add("bg-red-200");
            return;
        }

        onAdd(enteredTask);
        setEnteredTask("");

        inputRef.current.classList.remove("bg-red-200");
    }

    return (
        <div className="flex items-center gap-4">
            <input
                ref={inputRef}
                onChange={handleChange}
                value={enteredTask}
                type="text"
                className="w-64 px-2 py-1 transition-colors duration-200 rounded-sm bg-stone-200"
            />
            <button
                className="px-2 py-1 rounded-md text-stone-600 hover:bg-stone-300 hover:text-gray-800"
                onClick={handleClick}>
                Add Task
            </button>
        </div>
    );
}
