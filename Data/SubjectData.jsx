const courses = [
  {
    subject: "Computer",
    progress: 65,
    updatedata1: "unit 4 notes are here check it out ",
    pdf:"/resume.pdf",
    updatedata2: "unit 2 notes are here check it out ",
    updatedata3: "Class test will be on 23rd august and the syllabus is unit 4 and unit 2 ",
    updatedata4: "unit 4 notes are here check it out ",
    updatedata5: "unit 4 notes are here check it out ",

  },
  {
    subject: "Biology",
    progress: 65,
    updatedata1: "unit 1 notes are here check it out ",
    updatedata2: "unit 2 notes are here check it out ",
    updatedata3: "Class test will be on 23rd august and the syllabus is unit 4 and unit 2 ",
    updatedata4: "unit 4 notes are here check it out ",
   

  },
  {
    subject: "Physics",
    progress: 25,
    updatedata1: "unit 4 notes are here check it out ",
    updatedata2: "unit 2 notes are here check it out ",
    updatedata3: "Class test will be on 23rd august and the syllabus is unit 4 and unit 2 ",
    updatedata4: "unit 4 notes are here check it out ",
    updatedata5: "unit 4 notes are here check it out ",

  },
  {
    subject: "History",
    progress: 85 ,
    updatedata1: "unit 4 notes are here check it out ",
    updatedata2: "unit 2 notes are here check it out ",
    updatedata3: "Class test will be on 23rd august and the syllabus is unit 4 and unit 2 ",
    updatedata4: "unit 4 notes are here check it out ",
    updatedata5: "unit 4 notes are here check it out ",

},
  {
    subject: "Mathematics",
    progress: 55,
    updatedata1: "unit 4 notes are here check it out ",
    updatedata2: "unit 2 notes are here check it out ",
    updatedata3: "Class test will be on 23rd august and the syllabus is unit 4 and unit 2 ",
    updatedata4: "unit 4 notes are here check it out ",
    updatedata5: "unit 4 notes are here check it out ",

  },
];

export const fetchCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses);
    }, 500); // Simulating a network delay
  });
};
