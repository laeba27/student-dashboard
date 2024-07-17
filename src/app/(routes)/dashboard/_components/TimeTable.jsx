import React from 'react';
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Card, CardContent } from "../../../../components/ui//card";
import { Book, Coffee, Calculator, Beaker, Palette, Music } from 'lucide-react';

const TimelineItem = ({ time, subject, teacher, icon: Icon, color }) => (
  <div className="flex items-center mb-4">
    <div className={`w-16 text-xs text-gray-500`}>{time}</div>
    <div className={`w-1 h-16 ${color} rounded-full mx-2`}></div>
    <Card className="flex-1">
      <CardContent className="p-3">
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-2" />
          <div>
            <h3 className="text-sm font-semibold">{subject}</h3>
            <p className="text-xs text-gray-500">{teacher}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Timeline = () => {
  const schedule = [
    { time: '9:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Raj', icon: Calculator, color: 'bg-blue-500' },
    { time: '10:00 - 12:00', subject: 'Physics', teacher: 'Ms. rahul', icon: Beaker, color: 'bg-green-500' },
    { time: '12:00 - 1:00', subject: 'Lunch Break', teacher: '', icon: Coffee, color: 'bg-yellow-500' },
    { time: '1:00 - 1:30', subject: 'Literature', teacher: 'Mrs. laeba', icon: Book, color: 'bg-purple-500' },
    { time: '1:30 - 2:30', subject: 'Art', teacher: 'Mr. Manpreet', icon: Palette, color: 'bg-pink-500' },
    { time: '2:30 - 4:00', subject: 'Music', teacher: 'Ms. Lamba', icon: Music, color: 'bg-indigo-500' },
  ];

  return (
    <Card className="w-full h-full overflow-hidden">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Today's Timetable</h2>
        <ScrollArea className="">
          {schedule.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Timeline;