const projects = [

  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="https://github.com/natanmuletahunde" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline text-lg"
          >
            Visit My GitHub Account
          </a>
        </div>
      </section>
    );
  }
  
  export default Projects;
  