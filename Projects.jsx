
const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border p-4 bg-white shadow rounded">
          <h4 className="font-bold">Portfolio Website</h4>
          <p>A personal portfolio made using React and Tailwind CSS.</p>
        </div>
        <div className="border p-4 bg-white shadow rounded">
          <h4 className="font-bold">E-commerce UI</h4>
          <p>Frontend design for an e-commerce shop using Bootstrap and React.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
