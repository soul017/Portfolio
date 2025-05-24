import { ExternalLink, Github ,ArrowRight} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Console2Success",
    description:
      "Console2Success is an EdTech web platform built with React.js, designed to provide interactive Front-end tutorials and career guidance for students. It features a responsive UI, dynamic content rendering, and seamless navigation.",
    image: "/projects/C2S.jpg",
    tags: ["React", "VanilaCss"],
    Url: "https://console2success.in/",
    github: "#",
  },
  {
    id: 2,
    title: "Bite-box",
    description:
      "Bite-box is a responsive and user-friendly food ordering plateform, allow user to browse over different menus and place real-time check request with seamless checkout experience",
    image: "/projects/Bite-box.jpg",
    tags: ["React js", "TailwindCss", "Redux Toolkit"],
    Url: "https://soul017.github.io/BiteBox/",
    github: "https://github.com/soul017/BiteBox",
  },
  {
    id: 3,
    title: "Danveer",
    description:
      "A book donation website. It connects donors with recipients, promoting literacy and education by facilitating the exchange of books through a user-friendly and responsive platform.",
    image: "/projects/Danveer.jpg",
    tags: ["HTML", "CSS", "Javascript"],
    Url: "https://soul017.github.io/Danveer/",
    github: "https://github.com/soul017/Danveer",
  },
  {
    id: 4,
    title: "Vision Of Peace",
    description:
      "A self-wellbeing website designed to enhance your health and happiness through yogic practice, mindfulness exercises.",
    image: "/projects/Vision.jpg",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    Url: "https://soul017.github.io/Vision-of-Peace/~",
    github: "https://github.com/soul017/Vision-of-Peace",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Icons */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.Url}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/soul017"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
