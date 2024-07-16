"use client";
import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../../../components/ui/sheet";
import { Button } from "../../../../components/ui/button";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  Chip,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
} from "@mui/material";
import { Calendar as CalendarIcons } from "../../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import {
  EllipsisVertical,
  FileCheck,
  Calendar,
  Clock,
  BookOpen,
  Upload,
  Search,
  AlertCircle,
  CalendarCheck,
  CalendarIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";

const Lesson = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState(null);

  const pendingCount = rows.filter((row) => !row.submitted).length;
  const todayCount = rows.filter((row) => {
    const today = new Date().toISOString().split("T")[0];
    return row.dueDate === today && !row.submitted;
  }).length;

  useEffect(() => {
    const storedRows = localStorage.getItem("assignmentRows");
    if (storedRows) {
      setRows(JSON.parse(storedRows));
    } else {
      const initialRows = [
        {
          id: 1,
          name: "Math Assignment",
          type: "Assignment",
          subject: "Mathematics",
          createdAt: "2024-07-15",
          dueDate: "2024-07-20",
          submitted: false,
        },
        {
          id: 2,
          name: "Physics Test",
          type: "Class Test",
          subject: "Physics",
          createdAt: "2024-07-16",
          dueDate: "2024-07-18",
          startTime: "10:00 AM",
          endTime: "11:30 AM",
          submitted: false,
        },
        {
          id: 3,
          name: "Chemistry Lab Report",
          type: "Assignment",
          subject: "Chemistry",
          createdAt: "2024-07-10",
          dueDate: "2024-07-17",
          submitted: false,
        },
        {
          id: 4,
          name: "Biology Quiz",
          type: "Class Test",
          subject: "Biology",
          createdAt: "2024-07-05",
          dueDate: "2024-07-09",
          startTime: "09:00 AM",
          endTime: "09:45 AM",
          submitted: false,
        },
        {
          id: 5,
          name: "English Essay",
          type: "Assignment",
          subject: "English Literature",
          createdAt: "2024-07-12",
          dueDate: "2024-07-19",
          submitted: false,
        },
        {
          id: 6,
          name: "History Presentation",
          type: "Assignment",
          subject: "History",
          createdAt: "2024-07-08",
          dueDate: "2024-07-14",
          submitted: false,
        },
        {
          id: 7,
          name: "Computer Science Project",
          type: "Assignment",
          subject: "Computer Science",
          createdAt: "2024-07-01",
          dueDate: "2024-07-15",
          submitted: false,
        },
        {
          id: 8,
          name: "Statistics Midterm",
          type: "Class Test",
          subject: "Statistics",
          createdAt: "2024-07-03",
          dueDate: "2024-07-06",
          startTime: "01:00 PM",
          endTime: "03:00 PM",
          submitted: false,
        },
        {
          id: 9,
          name: "Economics Assignment",
          type: "Assignment",
          subject: "Economics",
          createdAt: "2024-07-09",
          dueDate: "2024-07-16",
          submitted: false,
        },
        {
          id: 10,
          name: "Political Science Debate",
          type: "Assignment",
          subject: "Political Science",
          createdAt: "2024-07-11",
          dueDate: "2024-07-21",
          submitted: false,
        },
      ];
      setRows(initialRows);
      localStorage.setItem("assignmentRows", JSON.stringify(initialRows));
    }
  }, []);

  const handleEdit = (params) => {
    setSelectedAssignment(params.row);
    setOpenSheet(true);
    const storedFile = localStorage.getItem(`file_${params.row.id}`);
    if (storedFile) {
      setSelectedFile(dataURLtoFile(storedFile, `file_${params.row.id}`));
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile && selectedAssignment) {
      const reader = new FileReader();
      reader.onloadend = function () {
        localStorage.setItem(`file_${selectedAssignment.id}`, reader.result);

        const updatedRows = rows.map((row) =>
          row.id === selectedAssignment.id ? { ...row, submitted: true } : row
        );
        setRows(updatedRows);
        localStorage.setItem("assignmentRows", JSON.stringify(updatedRows));

        setOpenSheet(false);
        setSelectedFile(null);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const columns = [
    { field: "name", headerName: "Assignments & Class Test", width: 300 },
    {
      field: "type",
      headerName: "Type",
      width: 200,
      renderCell: (params) => (
        <Chip
          className="rounded-lg px-2"
          label={params.value}
          color={params.value === "Assignment" ? "primary" : "secondary"}
          icon={
            params.value === "Assignment" ? (
              <FileCheck size={16} />
            ) : (
              <Clock size={16} />
            )
          }
        />
      ),
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center bg-purple-100 text-purple-500 p-2 rounded-md">
          <BookOpen size={16} className="mr-2" />
          {params.value}
        </div>
      ),
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center">
          <Calendar size={16} className="mr-2" />
          {params.value}
        </div>
      ),
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center">
          <Calendar size={16} className="mr-2" />
          {params.value}
        </div>
      ),
    },
    {
      field: "time",
      headerName: "Time",
      width: 200,
      renderCell: (params) =>
        params.row.type === "Class Test" ? (
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            {`${params.row.startTime} - ${params.row.endTime}`}
          </div>
        ) : (
          "N/A"
        ),
    },
    {
      field: "response",
      headerName: "Response",
      width: 200,
      renderCell: (params) =>
        params.row.submitted ? (
          <Chip
            className="rounded-lg px-2 bg-green-100 border-green-800 border text-green-600 w-full"
            label="Submitted"
            icon={<FileCheck size={16} color="green" />}
          />
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="px-2 w-full"
                size="sm"
                onClick={() => setSelectedAssignment(params.row)}
              >
                Submit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload File</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div className="mt-4">
                    <p>Preview:</p>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
              <Button onClick={handleSubmit} disabled={!selectedFile}>
                <Upload size={16} className="mr-2" />
                Submit
              </Button>
            </DialogContent>
          </Dialog>
        ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <Button variant="ghost" size="sm" onClick={() => handleEdit(params)}>
          <EllipsisVertical />
        </Button>
      ),
    },
  ];

  const filteredRows = rows.filter((row) => {
    const matchesSearch = Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesType = typeFilter === "All" || row.type === typeFilter;
    const matchesSubject =
      subjectFilter === "All" || row.subject === subjectFilter;
    const matchesDate =
      !dateFilter ||
      new Date(row.dueDate).toDateString() === dateFilter.toDateString();

    return matchesSearch && matchesType && matchesSubject && matchesDate;
  });

  const uniqueSubjects = [...new Set(rows.map((row) => row.subject))];

  return (
    <div className="p-4">
      <div className="mb-6 flex flex-wrap gap-4 items-end">
        <div className="flex-grow">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search className="mr-2" size={20} />,
            }}
          />
        </div>
        <FormControl variant="outlined" className="min-w-[150px]">
          <InputLabel>Type</InputLabel>
          <Select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            label="Type"
          >
            <MenuItem value="All">All Types</MenuItem>
            <MenuItem value="Assignment">Assignment</MenuItem>
            <MenuItem value="Class Test">Class Test</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="min-w-[150px]">
          <InputLabel>Subject</InputLabel>
          <Select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            label="Subject"
          >
            <MenuItem value="All">All Subjects</MenuItem>
            {uniqueSubjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Popover className="h-[60px]">
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`justify-start text-left font-normal h-[60px] ${
                !dateFilter && "text-muted-foreground"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateFilter ? (
                format(dateFilter, "PPP")
              ) : (
                <span>Filter by due date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarIcons
              mode="single"
              selected={dateFilter}
              onChange={(date) => setDateFilter(date)}
              placeholderText="Filter by due date"
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button
          className="h-[60px]"
          variant=""
          onClick={() => {
            setSearchTerm("");
            setTypeFilter("All");
            setSubjectFilter("All");
            setDateFilter(null);
          }}
        >
          Clear Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pending Tasks
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-100" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
            <p className="text-xs text-blue-100">Assignments and Class Tests</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Today</CardTitle>
            <CalendarCheck className="h-4 w-4 text-green-100" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayCount}</div>
            <p className="text-xs text-green-100">Pending tasks for today</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          />
        </TabsContent>
        <TabsContent value="pending">
          <DataGrid
            rows={filteredRows.filter((row) => !row.submitted)}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          />
        </TabsContent>
      </Tabs>

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Assignment</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <h3>{selectedAssignment?.name}</h3>
            {selectedAssignment?.submitted ? (
              <div>
                <p>Submitted file:</p>
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Submitted file"
                    className="max-w-full h-auto"
                  />
                )}
              </div>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Upload File</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {selectedFile && (
                      <div className="mt-4">
                        <p>Preview:</p>
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Preview"
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                  <Button onClick={handleSubmit} disabled={!selectedFile}>
                    <Upload size={16} className="mr-2" />
                    Submit
                  </Button>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Lesson;
