import React from 'react';

const projects = [
  {
    title: "Group Project",
    videoUrl: "https://www.youtube.com/embed/QsNn8d4OKXY",
    technologies: "TailwindCSS & JavaScript + Node.Js",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Individual Project",
    videoUrl: "/videos/nike.mp4",
    technologies: "TailwindCSS & JavaScript + Node.Js",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "แอพระบบยืนยันตัวตน",
    videoUrl: "/videos/auth.mp4",
    technologies: "TailwindCSS & JavaScript + Node.Js",
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#3c586b] rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-2xl p-4 mb-4">
                {project.videoUrl.includes('youtube.com/embed') ? (
                  <iframe
                    src={project.videoUrl}
                    className="w-full aspect-video rounded-xl"
                    allowFullScreen
                    title={project.title}
                  />
                ) : (
                  <video
                    src={project.videoUrl}
                    className="w-full h-auto rounded-xl"
                    controls
                    muted
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-sm mb-4">
                  {project.technologies}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#0095FF] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='mt-10 w-[85%] mx-auto '/>
    </div>
  );
};

export { Projects };

