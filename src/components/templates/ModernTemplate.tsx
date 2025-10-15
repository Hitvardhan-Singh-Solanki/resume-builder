import React from "react";
import type { ResumeData } from "@/types/resume";

interface ModernTemplateProps {
  data: ResumeData;
  isPreview?: boolean;
}

export function ModernTemplate({
  data,
  isPreview = false,
}: ModernTemplateProps) {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div
      className={`bg-white text-gray-900 ${
        isPreview ? "p-8" : "p-12"
      } max-w-4xl mx-auto`}
    >
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
        {personalInfo.linkedin && (
          <a
            href={personalInfo.linkedin}
            className="text-blue-600 hover:text-blue-800 mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
        {personalInfo.portfolio && (
          <a
            href={personalInfo.portfolio}
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        )}
        {personalInfo.summary && (
          <p className="text-gray-700 mt-4 leading-relaxed">
            {personalInfo.summary}
          </p>
        )}
      </header>

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-gray-600 text-right">
                    <p>
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-blue-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.field}</p>
                  </div>
                  <div className="text-gray-600 text-right">
                    <p>
                      {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                    </p>
                    {edu.gpa && <p>GPA: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-blue-50 p-3 rounded-lg">
                <span className="font-medium text-gray-900">{skill.name}</span>
                {skill.level && (
                  <span className="text-sm text-gray-600 ml-2">
                    ({skill.level})
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border-l-4 border-blue-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.startDate} -{" "}
                      {project.current ? "Present" : project.endDate}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.url && (
                      <a
                        href={project.url}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-gray-800 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
