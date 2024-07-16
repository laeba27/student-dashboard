"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { events } from "../../../../../Data/EventData"; 
function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setIsDialogOpen(true);
  };

  const handleEventClick = (info) => {
    const event = events.find(event => event.id === parseInt(info.event.id));
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        weekends={true}
        editable={true}
    selectable={true}
        events={events.map(event => ({ id: event.id, title: event.title, date: event.date }))}
      />
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add or Edit Event</DialogTitle>
              <DialogDescription>
                Selected date: {selectedDate}
              </DialogDescription>
            </DialogHeader>
            {/* Add your form or inputs here for adding/editing the event */}
            <form>
              <div className="flex gap-4 items-center">
                <label htmlFor="event-title">Event Title</label>
                <input className="rounded-md p-3"
                  type="text"
                  id="event-title"
                  name="event-title"
                  required
                />
              </div>
              {/* Add other form fields as needed */}
              <div className="flex justify-between float-right">
                <Button variant="destructive" type="submit">Save Event</Button>
                
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Page;
