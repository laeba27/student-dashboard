"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Calendar } from "../../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { TextField, Chip, Autocomplete } from "@mui/material";
import { format } from "date-fns";
import { CalendarIcon, Save } from "lucide-react";
import { jsPDF } from "jspdf";

const skillOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "node", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "sql", label: "SQL" },
  { value: "mongodb", label: "MongoDB" },
  { value: "aws", label: "AWS" },
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "git", label: "Git" },
  { value: "agile", label: "Agile Methodologies" },
  { value: "ui_design", label: "UI Design" },
  { value: "ux_design", label: "UX Design" },
  // Add more skills as needed
];

const Resume = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  const [education, setEducation] = useState([
    {
      institution: "",
      degree: "",
      field: "",
      startDate: null,
      endDate: null,
      gpa: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      startDate: null,
      endDate: null,
      description: "",
    },
  ]);

  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([
    { name: "", issuer: "", date: null },
  ]);
  const [projects, setProjects] = useState([
    { name: "", description: "", technologies: "" },
  ]);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (index, e) => {
    const newEducation = [...education];
    newEducation[index][e.target.name] = e.target.value;
    setEducation(newEducation);
  };

  const handleExperienceChange = (index, e) => {
    const newExperience = [...experience];
    newExperience[index][e.target.name] = e.target.value;
    setExperience(newExperience);
  };

  const handleSkillChange = (event, newValue) => {
    setSkills(newValue);
  };

  const handleCertificationChange = (index, field, value) => {
    const newCertifications = [...certifications];
    newCertifications[index][field] = value;
    setCertifications(newCertifications);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  // ... (keep the add* and remove* functions for education, experience)

  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", year: "" }]);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", position: "", duration: "", description: "" },
    ]);
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  const removeExperience = (index) => {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { name: "", issuer: "", date: null },
    ]);
  };

  const removeCertification = (index) => {
    const newCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(newCertifications);
  };

  const addProject = () => {
    setProjects([...projects, { name: "", description: "", technologies: "" }]);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    let yPos = 20;

    // Helper functions
    const addText = (
      text,
      size = 12,
      style = "normal",
      align = "left",
      xPos = 20
    ) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", style);
      doc.text(text, xPos, yPos, { align: align });
      yPos += size / 2 + 4;
    };

    const addSection = (title) => {
      yPos += 5;
      addText(title, 14, "bold");
      doc.setDrawColor(0);
      doc.line(20, yPos, pageWidth - 20, yPos);
      yPos += 5;
    };

    // Personal Info
    addText(personalInfo.name, 18, "bold", "center", pageWidth / 2);
    addText(
      `${personalInfo.address} | ${personalInfo.phone}`,
      10,
      "normal",
      "center",
      pageWidth / 2
    );
    addText(
      `${personalInfo.email} | ${personalInfo.github} | ${personalInfo.linkedin}`,
      10,
      "normal",
      "center",
      pageWidth / 2
    );

    // Professional Summary
    addSection("PROFESSIONAL SUMMARY");
    const summaryText =
      "Proactive and detail-oriented software developer with experience in developing and deploying web applications. Strong background in backend development and a passion for learning new technologies.";
    const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 40);
    summaryLines.forEach((line) => addText(line, 10));

    // Education
    addSection("EDUCATION");
    education.forEach((edu) => {
      addText(`${edu.degree} | GPA: ${edu.gpa}`, 11, "bold");
      addText(`${edu.institution}`, 10);
      addText(
        `${format(edu.startDate, "MMMM yyyy")} - ${format(
          edu.endDate,
          "MMMM yyyy"
        )}`,
        10
      );
      yPos += 2;
    });

    // Professional Experience
    addSection("PROFESSIONAL EXPERIENCE");
    experience.forEach((exp) => {
      addText(`${exp.company} | ${exp.position}`, 11, "bold");
      addText(
        `${format(exp.startDate, "MMMM yyyy")} - ${format(
          exp.endDate,
          "MMMM yyyy"
        )}`,
        10
      );
      const descriptionLines = doc.splitTextToSize(
        exp.description,
        pageWidth - 40
      );
      descriptionLines.forEach((line) => addText(`• ${line}`, 10));
      yPos += 2;
    });

    // Skills
    addSection("SKILLS");
    const skillGroups = {
      Languages: skills.filter((skill) =>
        ["javascript", "python", "java", "csharp", "sql"].includes(skill.value)
      ),
      "Frameworks & Libraries": skills.filter((skill) =>
        ["react", "node"].includes(skill.value)
      ),
      "Cloud & DevOps": skills.filter((skill) =>
        ["aws", "docker", "kubernetes"].includes(skill.value)
      ),
      Other: skills.filter(
        (skill) =>
          ![
            "javascript",
            "python",
            "java",
            "csharp",
            "sql",
            "react",
            "node",
            "aws",
            "docker",
            "kubernetes",
          ].includes(skill.value)
      ),
    };

    Object.entries(skillGroups).forEach(([group, groupSkills]) => {
      if (groupSkills.length > 0) {
        const skillText = `${group}: ${groupSkills
          .map((skill) => skill.label)
          .join(", ")}`;
        const skillLines = doc.splitTextToSize(skillText, pageWidth - 40);
        skillLines.forEach((line) => addText(line, 10));
      }
    });

    // Projects
    if (projects.length > 0) {
      addSection("PROJECTS");
      projects.forEach((project) => {
        addText(project.name, 11, "bold");
        const descriptionLines = doc.splitTextToSize(
          project.description,
          pageWidth - 40
        );
        descriptionLines.forEach((line) => addText(`• ${line}`, 10));
        addText(`Technologies: ${project.technologies}`, 10);
        yPos += 2;
      });
    }

    // Certifications
    if (certifications.length > 0) {
      addSection("CERTIFICATIONS");
      certifications.forEach((cert) => {
        addText(`${cert.name} - ${cert.issuer}`, 10, "bold");
        addText(`Date: ${format(cert.date, "MMMM yyyy")}`, 10);
        yPos += 2;
      });
    }

    doc.save("resume.pdf");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resume Builder</h1>

      {/* Personal Information */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={personalInfo.name}
              onChange={handlePersonalInfoChange}
            />
            <Input
              name="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={handlePersonalInfoChange}
            />
            <Input
              name="phone"
              placeholder="Phone"
              value={personalInfo.phone}
              onChange={handlePersonalInfoChange}
            />
            <Input
              name="address"
              placeholder="Address"
              value={personalInfo.address}
              onChange={handlePersonalInfoChange}
            />
            <Input
              name="linkedin"
              placeholder="LinkedIn URL"
              value={personalInfo.linkedin}
              onChange={handlePersonalInfoChange}
            />
            <Input
              name="github"
              placeholder="GitHub URL"
              value={personalInfo.github}
              onChange={handlePersonalInfoChange}
            />
            <Input
              name="portfolio"
              placeholder="Portfolio URL"
              value={personalInfo.portfolio}
              onChange={handlePersonalInfoChange}
            />
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="institution"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <Input
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <Input
                  name="field"
                  placeholder="Field of Study"
                  value={edu.field}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <Input
                  name="gpa"
                  placeholder="GPA"
                  value={edu.gpa}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {edu.startDate
                        ? format(edu.startDate, "PPP")
                        : "Start Date"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={edu.startDate}
                      onSelect={(date) =>
                        handleEducationChange(index, {
                          target: { name: "startDate", value: date },
                        })
                      }
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {edu.endDate ? format(edu.endDate, "PPP") : "End Date"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={edu.endDate}
                      onSelect={(date) =>
                        handleEducationChange(index, {
                          target: { name: "endDate", value: date },
                        })
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                onClick={() => removeEducation(index)}
                variant="destructive"
                className="mt-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button onClick={addEducation}>Add Education</Button>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <Input
                  name="position"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {exp.startDate
                        ? format(exp.startDate, "PPP")
                        : "Start Date"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={exp.startDate}
                      onSelect={(date) =>
                        handleExperienceChange(index, {
                          target: { name: "startDate", value: date },
                        })
                      }
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {exp.endDate ? format(exp.endDate, "PPP") : "End Date"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={exp.endDate}
                      onSelect={(date) =>
                        handleExperienceChange(index, {
                          target: { name: "endDate", value: date },
                        })
                      }
                    />
                  </PopoverContent>
                </Popover>
                <Textarea
                  name="description"
                  placeholder="Description"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="col-span-2"
                />
              </div>
              <Button
                onClick={() => removeExperience(index)}
                variant="destructive"
                className="mt-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button onClick={addExperience}>Add Experience</Button>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Autocomplete
            multiple
            id="skills-select"
            options={skillOptions}
            value={skills}
            onChange={handleSkillChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Skills"
                placeholder="Select skills"
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option.label}
                  {...getTagProps({ index })}
                  key={option.value}
                />
              ))
            }
          />
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Certification Name"
                  value={cert.name}
                  onChange={(e) =>
                    handleCertificationChange(index, "name", e.target.value)
                  }
                />
                <Input
                  placeholder="Issuer"
                  value={cert.issuer}
                  onChange={(e) =>
                    handleCertificationChange(index, "issuer", e.target.value)
                  }
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {cert.date ? format(cert.date, "PPP") : "Date Obtained"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={cert.date}
                      onSelect={(date) =>
                        handleCertificationChange(index, "date", date)
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                onClick={() => removeCertification(index)}
                variant="destructive"
                className="mt-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button onClick={addCertification}>Add Certification</Button>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) =>
                    handleProjectChange(index, "name", e.target.value)
                  }
                />
                <Input
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) =>
                    handleProjectChange(index, "name", e.target.value)
                  }
                />
                <Input
                  placeholder="Technologies Used"
                  value={project.technologies}
                  onChange={(e) =>
                    handleProjectChange(index, "technologies", e.target.value)
                  }
                />
                <Textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) =>
                    handleProjectChange(index, "description", e.target.value)
                  }
                  className="col-span-2"
                />
              </div>
              <Button
                onClick={() => removeProject(index)}
                variant="destructive"
                className="mt-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button onClick={addProject}>Add Project</Button>
        </CardContent>
      </Card>

      <Button onClick={generatePDF} className="mt-4">
        <Save className="mr-2" />
        Save Resume
      </Button>
    </div>
  );
};

export default Resume;
