"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Book } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../../../components/ui/sheet";
import { fetchCourses } from "../../../../../Data/SubjectData";

const AnimatedProgressBar = ({ progress }) => {
  return (
    <div className="relative w-44 h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

function MyCourse() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courseData = await fetchCourses();
        setCourses(courseData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false after fetch
      }
    };

    loadCourses();
  }, []);

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div>
      <div className="bg-white h-[400px] w-full border overflow-y-scroll rounded-md p-4">
        <h2 className="font-semibold text-2xl mb-4">My Courses</h2>

        <Table>
          <TableCaption>A list of your recent courses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Subjects</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="text-right">View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex gap-2 items-center">
                    <Book className="text-blue-500" />
                    <div className="flex flex-col">
                    <h2>{course.subject}</h2>
                    <h2 className="text-xs text-gray-500 capitalize">{course.teacher}</h2>
                    </div>
                    
                  </div>
                </TableCell>
                <TableCell>
  <div className="flex items-center gap-2">
    <AnimatedProgressBar progress={course.progress} />
    <span className="text-sm text-gray-500">{course.progress}%</span>
  </div>
</TableCell>
                <TableCell className="text-right">
                  <Sheet>
                    <SheetTrigger>
                      <Button
                        variant="outline"
                        onClick={() => handleViewCourse(course)}
                      >
                        View Course
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>{selectedCourse?.subject}</SheetTitle>
                        <SheetDescription>
                          <div>
                            <p className="text-gray-500 text-sm mb-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nobis velit!
                            </p>
                            <div>
  <h2 className="font-bold mt-2 text-lg mb-2">Updates</h2>
  <div className="space-y-2">
    {['updatedata1', 'updatedata2', 'updatedata3', 'updatedata4', 'updatedata5'].map((key, index) => (
      selectedCourse?.[key] && (
        <div key={index} className="border rounded-md p-3 bg-gray-50">
          <p className="text-sm">{selectedCourse[key]?.text}</p>
          {selectedCourse[key]?.pdf && (
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => window.open(selectedCourse[key].pdf, '_blank')}
            >
              View Document
            </button>
          )}
        </div>
      )
    ))}
  </div>
</div>

                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MyCourse;


