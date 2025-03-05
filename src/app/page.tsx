import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="mt-10 md:mt-[100px] flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-65vh md:min-h-80vh">

      {/* Section with name and role */}
      <section className="gap-y-2 text-center md:text-left px-10 mb-12">
      <h1 className="text-4xl md:text-5xl">
        Raziel Navarro
      </h1>
      <h1 className="text-xl md:text-2xl py-2 text-transparent bg-clip-text bg-purple-gradient">
        Full Stack Developer
      </h1>
      </section>

      {/* Aside section with video game character image */}
      <aside className="flex justify-center md:justify-start">
        <img alt="Kirby" src="assets\Kirby.gif" className="w-10/12 md:h-auto"></img>
      </aside>
    </main>

      {/* Section with skills */}
      <div id="skills" className="text-center">
      <h1 className="pixel-btn">Skills</h1>
  
      </div>

      {/* Section with projects */}
      <div id="projects" className="text-center pb-12">
      <h1 className="pixel-btn">Projects</h1>
      </div>

    {/* Footer for the website */}

    </>
  );
}
