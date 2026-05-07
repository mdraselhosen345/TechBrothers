const projects = [
  {
    title: "Books Shop",
    image: "/assets/book.png",
    link: "https://marvelous-queijadas-2244b7.netlify.app/"
  },
  {
    title: "Web Template Design",
    image: "/assets/design.png",
    link: "https://webtemplate-design.netlify.app/"
  },
  {
    title: "Pet Care Dog",
    image: "/assets/pet.png",
    link: "https://pet-care-in.netlify.app/"
  },
  {
    title: "NID Tasks",
    image: "/assets/nidtaks.png",
    link: "https://nid-taks.netlify.app/"
  },
  {
    title: "G3 Architects",
    image: "/assets/architects.png",
    link: "https://g3-archi.netlify.app/"
  },
  {
    title: "Web Profile",
    image: "/assets/mary.png",
    link: "https://web-profail.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section className="py-12">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#fabd44]">
          My <span className="text-[#fd5d3d]">Projects</span>
        </h1>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Here are some of my best projects where I build responsive and modern web applications using React and Tailwind CSS.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h2 className="text-xl font-semibold text-[#FF985C]">
                  {item.title}
                </h2>
              </div>

            </div>
          </a>
        ))}

      </div>
    </section>
  );
};

export default Projects;