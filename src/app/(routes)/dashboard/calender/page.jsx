"use client";
import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { format } from "date-fns";
import { Calendar } from "../../../../components/ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { CalendarIcon } from "lucide-react";

const events = [
  {
    id: "1",
    title: "Math Exam",
    start: "2024-07-20",
    end: "2024-07-22",
    backgroundColor: "rgba(75, 192, 192, 0.1)",
    borderColor: "#4BC0C0",
    textColor: "#4BC0C0",
    type: "exam",
    border: "none",
  },
  {
    id: "2",
    title: "Group Project Meeting",
    start: "2024-07-15",
    end: "2024-07-20",
    backgroundColor: "rgba(54, 162, 235, 0.1)",
    borderColor: "#36A2EB",
    textColor: "#36A2EB",
    type: "project",
  },
  {
    id: "3",
    title: "Dentist Appointment",
    start: "2024-07-18",
    backgroundColor: "rgba(153, 102, 255, 0.1)",
    borderColor: "#9966FF",
    textColor: "#9966FF",
    type: "personal",
  },
  {
    id: "4",
    title: "Independence Day",
    start: "2024-07-04",
    backgroundColor: "rgba(255, 99, 132, 0.1)",
    borderColor: "#FF6384",
    textColor: "#FF6384",
    type: "holiday",
  },
  {
    id: "5",
    title: "Lecture on AI",
    start: "2024-07-21",
    end: "2024-07-22",
    backgroundColor: "rgba(255, 159, 64, 0.1)",
    borderColor: "#FF9F40",
    textColor: "#FF9F40",
    type: "lecture",
  },
  {
    id: "6",
    title: "Basketball Practice",
    start: "2024-07-22",
    end: "2024-07-22",
    backgroundColor: "rgba(255, 206, 86, 0.1)",
    borderColor: "#FFCE56",
    textColor: "#FFCE56",
    type: "sports",
  },
  {
    id: "7",
    title: "Study Group",
    start: "2024-07-25",
    end: "2024-07-25",
    backgroundColor: "rgba(75, 192, 192, 0.1)",
    borderColor: "#4BC0C0",
    textColor: "#4BC0C0",
    type: "study",
  },
  {
    id: "8",
    title: "Movie Night",
    start: "2024-07-26",
    end: "2024-07-26",
    backgroundColor: "rgba(153, 102, 255, 0.1)",
    borderColor: "#9966FF",
    textColor: "#9966FF",
    type: "leisure",
  },
];

const renderEventContent = (eventInfo) => {
  return (
    <div
      className="flex items-center p-2  w-full h-full"
      style={{
        backgroundColor: eventInfo.event.backgroundColor,
        border: `1px solid ${eventInfo.event.borderColor}`,
        borderRadius: "2px",
      }}
    >
      <div
        className="w-2 h-2 rounded-full mr-2"
        style={{ backgroundColor: eventInfo.event.borderColor }}
      ></div>
      <p
        className="text-xs font-semibold truncate"
        style={{ color: eventInfo.event.textColor }}
      >
        {eventInfo.event.title}
      </p>
    </div>
  );
};

function Page() {
  const [view, setView] = useState("dayGridMonth");
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    type: "personal",
  });

  const eventTypes = [
    { label: "View All", value: "all" },
    { label: "Exam", value: "exam" },
    { label: "Project", value: "project" },
    { label: "Personal", value: "personal" },
    { label: "Holiday", value: "holiday" },
    { label: "Lecture", value: "lecture" },
    { label: "Sports", value: "sports" },
    { label: "Study", value: "study" },
    { label: "Leisure", value: "leisure" },
  ];

  const handleEventDrop = (info) => {
    alert(
      `Event '${
        info.event.title
      }' was moved to ${info.event.start.toISOString()}`
    );
    // Here you would update your event data
  };

  const handleAddEvent = () => {
    // Add event logic here
    console.log("New event:", newEvent);
    setIsAddEventOpen(false);
    // Reset form
    setNewEvent({
      title: "",
      start: "",
      end: "",
      type: "personal",
    });
  };

  return (
    <div className="mx-auto p-4 h-[90vh] overflow-hidden rounded-lg">
      <Card className="w-full  mx-auto shadow-lg h-full flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
          <CardTitle className="text-3xl font-bold">
            Personal Calendar
          </CardTitle>
          <Sheet open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                + Add Event
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Add New Event</SheetTitle>
                <SheetDescription>
                  Fill in the details of the event.
                </SheetDescription>
              </SheetHeader>
              <div className="p-4">
                <div className="mb-4">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newEvent.title}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                    placeholder="Event Title"
                  />
                </div>
                <div className="mb-4 flex flex-col gap-2">
                  <Label htmlFor="start">Start Date</Label>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`justify-start text-left font-normal ${
                          !newEvent.end && "text-muted-foreground"
                        }`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newEvent.end ? (
                          format(newEvent.end, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={newEvent.end}
                        onSelect={(date) =>
                          setNewEvent({ ...newEvent, end: date })
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mb-4 flex flex-col gap-2">
                  <Label htmlFor="end">End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`justify-start text-left font-normal ${
                          !newEvent.start && "text-muted-foreground"
                        }`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newEvent.start ? (
                          format(newEvent.start, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={newEvent.start}
                        onSelect={(date) =>
                          setNewEvent({ ...newEvent, start: date })
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mb-4">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={newEvent.type}
                    onValueChange={(value) =>
                      setNewEvent({ ...newEvent, type: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.slice(1).map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleAddEvent}>Add Event</Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardHeader>
        <CardContent className="p-6 flex-grow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
            <div className="md:col-span-1 space-y-6">
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dayGridMonth">Month</SelectItem>
                  <SelectItem value="timeGridWeek">Week</SelectItem>
                  <SelectItem value="timeGridDay">Day</SelectItem>
                  <SelectItem value="listWeek">List</SelectItem>
                </SelectContent>
              </Select>
              <div className="w-full flex items-start justify-center flex-col gap-2 mx-auto">
                <div className=" mx-auto">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-lg px-1 pt-2">FILTER</h3>
                {eventTypes.map((type) => (
                  <div
                    key={type.value}
                    className="flex items-center space-x-2 mb-2 p-1"
                  >
                    <Checkbox id={type.value} />
                    <label
                      htmlFor={type.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 overflow-auto">
              <FullCalendar
                ref={calendarRef}
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin,
                ]}
                initialView={view}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                events={events}
                eventContent={renderEventContent}
                editable={true}
                droppable={true}
                eventDrop={handleEventDrop}
                height="100%"
                dayMaxEvents={true}
                views={{
                  dayGridMonth: {
                    buttonText: "Month",
                  },
                  timeGridWeek: {
                    buttonText: "Week",
                  },
                  timeGridDay: {
                    buttonText: "Day",
                  },
                  listWeek: {
                    buttonText: "List",
                  },
                }}
                buttonText={{
                  today: "Today",
                }}
                customButtons={{
                  prev: {
                    text: "<",
                    click: function () {
                      const calendarApi = calendarRef.current.getApi();

                      calendarApi.prev();
                    },
                  },
                  next: {
                    text: ">",
                    click: function () {
                      const calendarApi = calendarRef.current.getApi();
                      calendarApi.next();
                    },
                  },
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
