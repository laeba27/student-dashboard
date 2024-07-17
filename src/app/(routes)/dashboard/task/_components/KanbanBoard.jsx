"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../.../../../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../.../../../../../../components/ui/dialog";
import { Input } from "../.../../../../../../components/ui/input";
import { Label } from "../.../../../../../../components/ui/label";
import { Textarea } from "../.../../../../../../components/ui/textarea";
import { Badge } from "../.../../../../../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../.../../../../../../components/ui/select";
import { Card, CardContent } from "../.../../../../../../components/ui/card";
import { Calendar } from "../.../../../../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../.../../../../../../components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../.../../../../../../components/ui/dropdown-menu";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  MoreVertical,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import { Seo } from "./CircularProgress";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
  
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: null,
    subject: "",
    status: "todo",
    image: null,
  });
  const [open, setOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [editingTask, setEditingTask] = useState(null);


  const dummyTasks = [
    {
      id: "1",
      title: "Math Homework",
      description: "Complete exercises 1 to 10 from chapter 5.",
      dueDate: "2024-07-20",
      subject: "Mathematics",
      status: "todo",
      image: null,
    },
    {
      id: "2",
      title: "Science Project",
      description: "Prepare a presentation on renewable energy sources.",
      dueDate: "2024-07-25",
      subject: "Physics",
      status: "inprogress",
      image: null,
    },
    {
      id: "3",
      title: "History Essay",
      description: "Write an essay on the causes of World War II.",
      dueDate: "2024-07-30",
      subject: "History",
      status: "completed",
      image: null,
    },
    {
      id: "4",
      title: "Vacation Planning",
      description: "Plan itinerary for the summer vacation.",
      dueDate: "2024-08-15",
      subject: "Personal",
      status: "todo",
      image: null,
    },
  ];

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!storedTasks || storedTasks.length === 0) {
      // If no tasks in local storage, set dummy data
      localStorage.setItem("tasks", JSON.stringify(dummyTasks));
      setTasks(dummyTasks);
    } else {
      // If tasks exist in local storage, use those
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const saveTask = () => {
    let updatedTasks;
    if (editingTask) {
      updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? { ...newTask, id: editingTask.id } : task
      );
    } else {
      updatedTasks = [...tasks, { ...newTask, id: Date.now().toString() }];
    }
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask({
      title: "",
      description: "",
      dueDate: null,
      subject: "",
      status: "todo",
      image: null,
    });
    setPreviewImage(null);
    setEditingTask(null);
    setOpen(false);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (task) => {
    setNewTask(task);
    setPreviewImage(task.image);
    setEditingTask(task);
    setOpen(true);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setNewTask({ ...newTask, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const getBackgroundColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-blue-50";
      case "inprogress":
        return "bg-yellow-50";
      case "completed":
        return "bg-green-50";
      default:
        return "bg-gray-50";
    }
  };

  const getChipColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-blue-500 text-white";
      case "inprogress":
        return "bg-yellow-500 text-black";
      case "completed":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Literature",
    "History",
    "Economics",
    "Psychology",
    "Sociology",
  ];

  const calculateProgress = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(
      (task) => task.status === "completed"
    ).length;
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  };

  const getTaskCountByStatus = (status) => {
    return tasks.filter((task) => task.status === status).length;
  };

  return (
    <div className="  ">
      <div className="flex justify-between items-center  px-10">
        <h1 className="font-bold text-2xl uppercase text-sky-700">Student Task</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-sky-600 text-white hover:bg-sky-200 transition-colors duration-300 shadow-lg"
            >
              <Plus className="mr-2 h-4 w-4" /> Add New Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-sky-800">
                {editingTask ? "Edit Task" : "Add New Task"}
              </DialogTitle>
            </DialogHeader>
            <div className=" gap-4 py-4">
              <div className="flex flex-col mb-2 gap-2">
                <Label>Title</Label>
                <Input
                  id="title"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <Label>Description</Label>
                <Textarea
                  id="description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <Label>Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`justify-start text-left font-normal ${
                        !newTask.dueDate && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {newTask.dueDate ? (
                        format(newTask.dueDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={newTask.dueDate}
                      onSelect={(date) =>
                        setNewTask({ ...newTask, dueDate: date })
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <Label>Subject</Label>
                <Select
                  value={newTask.subject}
                  onValueChange={(value) =>
                    setNewTask({ ...newTask, subject: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <Label>Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full"
                />
              </div>
              {previewImage && (
                <div className="mt-4">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="max-w-full h-[300px] object-contain rounded-lg"
                  />
                </div>
              )}
            </div>
            <Button
              onClick={saveTask}
              className="bg-blue-600 text-white hover:bg-purple-700 transition-colors duration-300"
            >
              {editingTask ? "Update Task" : "Save Task"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8  p-10  rounded-xl ">
        {["todo", "inprogress", "completed"].map((status) => (
          <Card
            key={status}
            className={` bg-blue-50 border-none overflow-hidden`}
          >
            <div className=" px-4 py-2 bg-white bg-opacity-50 rounded-2xl">
              <h2 className="text-lg  font-bold capitalize text-sky-800">
                {status === "inprogress" ? "In Progress" : status}
              </h2>
            </div>
            <CardContent className="p-4 overflow-x-hidden overflow-y-auto max-h-[800px]">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-white p-4 mb-4 rounded-lg border   shadow-2xl transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center justify-start gap-4 flex-wrap">
                      <Badge
                          className={`${getChipColor(
                            task.status
                          )}  capitalize text-xs`}
                        >
                          {task.status === "inprogress"
                            ? "In Progress"
                            : task.status}
                        </Badge>
                        <Badge
                          className={
                            "bg-blue-100 text-sky-500 p-2 px-4 font-semibold capitalize text-xs "
                          }
                        >
                          {task?.subject}
                        </Badge>
                      
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => editTask(task)}>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => deleteTask(task.id)}>
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      <p className="font-bold capitalize text-lg text-sky-700  mt-1">
                        {task.title}
                      </p>
                      <div className="flex justify-start items-center mt-3">
                        <span className="text-xs text-blue-500 bg-blue-100 p-2 rounded-md">
                          Due:{" "}
                          {task.dueDate
                            ? format(new Date(task.dueDate), "PPP")
                            : "Not set"}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm first-letter:capitalize text-gray-600 mt-2">
                      {task.description}
                    </p>
                    {task.image && (
                      <img
                        src={task.image}
                        alt={task.title}
                        className="mt-2 max-w-full h-auto rounded-lg"
                      />
                    )}

                    <Select
                      onValueChange={(value) =>
                        updateTaskStatus(task.id, value)
                      }
                      defaultValue={task.status}
                    >
                      <SelectTrigger className="w-full mt-3">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="inprogress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
            </CardContent>
          </Card>
        ))}

        {/* Progress and Stats Column */}
        <Card className="bg-gray-50 rounded-xl shadow-xl overflow-hidden max-h-[1000px] min-h-[550px] flex flex-col gap-2">
          <div className="bg-white bg-opacity-50 p-4">
            <h2 className="text-lg font-bold mb-4 text-sky-800">
              Progress & Stats
            </h2>
          </div>
          <CardContent className="p-4 flex flex-col gap-4 justify-between ">
            <div className="flex items-center justify-center mb-6">
              <Seo progress={calculateProgress()} />
            </div>

            <div className="grid  grid-cols-1 gap-4 ">
              <Card className="bg-blue-100 px-4 py-2  flex items-center justify-between rounded-lg shadow ">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  To Do
                </h3>
                <p className="text-xl font-bold text-blue-600">
                  {getTaskCountByStatus("todo")}
                </p>
              </Card>
              <Card className="bg-yellow-100 flex items-center justify-between px-4 py-2 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  In Progress
                </h3>
                <p className="text-3xl font-bold text-yellow-600">
                  {getTaskCountByStatus("inprogress")}
                </p>
              </Card>
              <Card className="bg-green-100 flex items-center justify-between px-4 py-2  rounded-lg shadow">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Completed
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  {getTaskCountByStatus("completed")}
                </p>
              </Card>
              <Card className="bg-purple-100 flex items-center justify-between px-4 py-2 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Total Tasks
                </h3>
                <p className="text-3xl font-bold text-purple-600">
                  {tasks.length}
                </p>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KanbanBoard;
