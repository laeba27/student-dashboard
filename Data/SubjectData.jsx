const courses = [
  {
    subject: "Computer",
  progress: 65,
  teacher: "mr.Manpreet singh",
  updatedata1: {
    text: "unit 4 notes are here check it out",
    pdf: "/resume.pdf"
  },
  updatedata2: {
    text: "unit 2 notes are here check it out"
  },
  updatedata3: {
    text: "Class test will be on 23rd August and the syllabus is unit 4 and unit 2"
  }
  },
  {
    subject: "Biology",
  progress: 95,
  teacher: "mrs. heena yadav",
  updatedata1: {
    text: "unit 1 notes are here check it out",
    pdf: "/resume.pdf"
  },
  updatedata2: {
    text: "unit 2 notes are here check it out",
    pdf: "/resume.pdf"
  },
  updatedata3: {
    text: "Class test will be on 3rd August "
  },
  
  },
  {
    subject: "Mathematics",
  progress: 65,
  teacher: "mr. ali",
  updatedata1: {
    text: "unit 4 notes are here check it out",
    pdf: "/resume.pdf"
  },
  updatedata2: {
    text: "unit 2 notes are here check it out"
  },
  updatedata3: {
    text: "Class test will be on 23rd August and the syllabus is unit 4 and unit 2"
  },
  updatedata4: {
    text: "unit 4 notes are here check it out"
  },
  updatedata5: {
    text: "unit 4 notes are here check it out"
  }

  },
  {
    subject: "Chemistry",
  progress: 35,
  teacher: "mrs. Sangita kataria",
  updatedata1: {
    text: "unit 4 notes are here check it out",
    
  },
  updatedata2: {
    text: "unit 2 notes are here check it out",
    pdf: "/resume.pdf"
  },
  updatedata3: {
    text: "Class test will be on 23rd August and the syllabus is unit 4 and unit 2"
  },
 

},
  {
    subject: "Physics",
    progress: 95,
    teacher: "mrs. Manju singh",
    updatedata1: {
      text: "unit 4 notes are here check it out",
      pdf: "/resume.pdf"
    },
    updatedata2: {
      text: "unit 2 notes are here check it out"
    },
    
  },
];

export const fetchCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses);
    }, 500); // Simulating a network delay
  });
};
