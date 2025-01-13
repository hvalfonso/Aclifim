import { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaList, FaTasks } from "react-icons/fa";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export default function ActiEducativa () {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    const [editingTask, setEditingTask] = useState<number | null>(null);
    const [editValue, setEditValue] = useState<string>("");
    const [viewMode, setViewMode] = useState<"dashboard" | "table">("dashboard");

    const addTask = () => {
    if (newTask.trim()) {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask("");
    }
    };

    const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleComplete = (taskId: number) => {
    setTasks(
        tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
        )
    );
    };

    const startEditing = (task: Task) => {
    setEditingTask(task.id);
    setEditValue(task.text);
    };

    const saveEdit = (taskId: number) => {
    setTasks(
        tasks.map((task) =>
        task.id === taskId ? { ...task, text: editValue } : task
        )
    );
    setEditingTask(null);
    setEditValue("");
    };


    const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
    };

    const stats = getStats();

    return (
    <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <h1 className="text-heading font-heading text-center mb-8 text-foreground">
            Actividades Educativa
        </h1>

        <div className="flex justify-end gap-4 mb-6">
            <button
            onClick={() => setViewMode("dashboard")}
            className={`px-4 py-2 rounded flex items-center gap-2 ${viewMode === "dashboard" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
            <FaTasks /> Tablero
            </button>
            <button
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 rounded flex items-center gap-2 ${viewMode === "table" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
            <FaList /> Ver tabla
            </button>
        </div>

        <div className="flex gap-4 mb-6">
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Añadir nueva actividad"
            className="flex-1 px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            />
            <button
            onClick={addTask}
            className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
            Añadir Actividad
            </button>
        </div>

        {viewMode === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-chart-1/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Total de Actividades</h3>
                <p className="text-3xl font-bold text-chart-1">{stats.total}</p>
            </div>
            <div className="bg-chart-2/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Actividades Completadas</h3>
                <p className="text-3xl font-bold text-chart-2">{stats.completed}</p>
            </div>
            <div className="bg-chart-3/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Actividades Pendientes</h3>
                <p className="text-3xl font-bold text-chart-3">{stats.pending}</p>
            </div>
            </div>
        )}



        {viewMode === "dashboard" ? (
            <div className="space-y-4 mb-6">
            {tasks.map((task) => (
                <div
                key={task.id}
                className="flex items-center justify-between bg-secondary rounded p-4"
                >
                {editingTask === task.id ? (
                    <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground mr-4"
                    onKeyPress={(e) => e.key === "Enter" && saveEdit(task.id)}
                    autoFocus
                    />
                ) : (
                    <span
                    className={`flex-1 ${task.completed ? "line-through text-accent" : "text-foreground"}`}
                    >
                    {task.text}
                    </span>
                )}
                <div className="flex items-center gap-3">
                    {editingTask === task.id ? (
                    <button
                        onClick={() => saveEdit(task.id)}
                        className="text-primary hover:text-primary/80"
                    >
                        <FaCheck size={18} />
                    </button>
                    ) : (
                    <button
                        onClick={() => startEditing(task)}
                        className="text-primary hover:text-primary/80"
                    >
                        <FaEdit size={18} />
                    </button>
                    )}
                    <button
                    onClick={() => toggleComplete(task.id)}
                    className={`${task.completed ? "text-chart-2" : "text-accent"} hover:opacity-80`}
                    >
                    <FaCheck size={18} />
                    </button>
                    <button
                    onClick={() => deleteTask(task.id)}
                    className="text-destructive hover:text-destructive/80"
                    >
                    <FaTrash size={18} />
                    </button>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-secondary">
                    <th className="text-left p-4 border-b border-input">Actividades</th>
                    <th className="text-left p-4 border-b border-input">Estado</th>
                    <th className="text-right p-4 border-b border-input">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <tr key={task.id} className="border-b border-input">
                    <td className="p-4">
                        {editingTask === task.id ? (
                        <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                            onKeyPress={(e) => e.key === "Enter" && saveEdit(task.id)}
                            autoFocus
                        />
                        ) : (
                        <span className={task.completed ? "line-through text-accent" : "text-foreground"}>
                            {task.text}
                        </span>
                        )}
                    </td>
                    <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${task.completed ? "bg-chart-2/20 text-chart-2" : "bg-chart-3/20 text-chart-3"}`}>
                        {task.completed ? "Completado" : "Pendiente"}
                        </span>
                    </td>
                    <td className="p-4">
                        <div className="flex items-center justify-end gap-3">
                        {editingTask === task.id ? (
                            <button
                            onClick={() => saveEdit(task.id)}
                            className="text-primary hover:text-primary/80"
                            >
                            <FaCheck size={18} />
                            </button>
                        ) : (
                            <button
                            onClick={() => startEditing(task)}
                            className="text-primary hover:text-primary/80"
                            >
                            <FaEdit size={18} />
                            </button>
                        )}
                        <button
                            onClick={() => toggleComplete(task.id)}
                            className={`${task.completed ? "text-chart-2" : "text-accent"} hover:opacity-80`}
                        >
                            <FaCheck size={18} />
                        </button>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-destructive hover:text-destructive/80"
                        >
                            <FaTrash size={18} />
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
        </div>
    </div>
    );
};
