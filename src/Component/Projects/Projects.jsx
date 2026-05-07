import Book from '../../assets/book.png';
import Banner from '../../assets/Design.png';
import Pet from '../../assets/pet.png';
import Nid from '../../assets/Nidtaks.png';
import Archit from '../../assets/architects.png';
import Mar from '../../assets/mary.png';

const Projects = () => {
  return (
    <div className='mt-10 mb-10'>

      {/* Heading */}
      <div className='mt-5 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl fira-sans-black text-[#fabd44]'>
          My <span className='text-[#fd5d3d]'>Projects</span>
        </h1>
        <p className="pt-2 px-5 text-sm md:text-base text-[#C4C4C4] max-w-3xl mx-auto">
          Here are some of my projects where I apply my skills to build clean, responsive, and user-friendly web applications using modern technologies.
        </p>
      </div>

      {/* Cards */}
      <div className='max-w-6xl mx-auto grid gap-6 mt-15 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

        {/* Project 1 */}
        <a href="https://marvelous-queijadas-2244b7.netlify.app/" target="_blank" rel="noreferrer">
          <div className="card bg-base-100 image-full shadow-2xl shadow-black">
            <figure>
              <img src={Book} alt="Books Shop" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#FF985C]">Books Shop</h2>
            </div>
          </div>
        </a>

        {/* Project 2 */}
        <a href="https://webtemplate-design.netlify.app/" target="_blank" rel="noreferrer">
          <div className="card bg-base-100 image-full shadow-2xl shadow-black">
            <figure>
              <img src={Banner} alt="Web Template" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#FF985C]">Web Template Design</h2>
            </div>
          </div>
        </a>

        {/* Project 3 */}
        <a href="https://pet-care-in.netlify.app/" target="_blank" rel="noreferrer">
          <div className="card bg-base-100 image-full shadow-2xl shadow-black">
            <figure>
              <img src={Pet} alt="Pet Care" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#FF985C]">Pet Care Dog</h2>
            </div>
          </div>
        </a>

        {/* Project 4 */}
        <a href="https://nid-taks.netlify.app/" target="_blank" rel="noreferrer">
          <div className="card bg-base-100 image-full shadow-2xl shadow-black">
            <figure>
              <img src={Nid} alt="NID Tasks" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#FF985C]">NID Tasks</h2>
            </div>
          </div>
        </a>

        {/* Project 5 */}
        <a href="https://g3-archi.netlify.app/" target="_blank" rel="noreferrer">
          <div className="card bg-base-100 image-full shadow-2xl shadow-black">
            <figure>
              <img src={Archit} alt="Architects" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#FF985C]">G3 Architects</h2>
            </div>
          </div>
        </a>

        {/* Project 6 */}
        <a href="https://web-profail.netlify.app/" target="_blank" rel="noreferrer">
          <div className="card bg-base-100 image-full shadow-2xl shadow-black">
            <figure>
              <img src={Mar} alt="Profile Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#FF985C]">Web Profile</h2>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Projects;