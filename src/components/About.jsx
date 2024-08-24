const About = () => {
    return (
      <section id="about" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-center max-w-xl mx-auto text-lg mb-8">
          Im a passionate software engineer with experience in building responsive web applications using modern technologies like React, Vite, and Tailwind CSS.
        </p>
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-medium">Web Development</h4>
              <p>React, Vite, Tailwind CSS, JavaScript, HTML, CSS</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-medium">Mobile App Development</h4>
              <p>Flutter, React Native, Dart</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-medium">Backend Development</h4>
              <p>Node.js, Express, Laravel</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-medium">Database Management</h4>
              <p>MySQL, PostgreSQL, MongoDB</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-medium">Version Control</h4>
              <p>Git, GitHub</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-medium">UI/UX Design</h4>
              <p>Figma, Adobe XD</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default About;
  