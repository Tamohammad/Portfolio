import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <div
        className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-pattern bg-about"
        ></div>
        <div className="md:w-3/5">
          <h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
            About
            <hr
              className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
  md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
            />
          </h2>

          <p>
            I'm <span className="font-bold">Mohammad Ahmadi</span>, a motivated
            and passionate{" "}
            <span className="font-bold">Full-Stack Developer</span> with a
            strong focus on building modern and user-friendly web applications.
            I specialize in the <span className="font-bold">MERN stack</span>{" "}
            and also have a growing interest in{" "}
            <span className="font-bold">PHP and Laravel</span> for backend
            development.
          </p>
          <br />

          <p>
            I hold a{" "}
            <span className="font-bold">
              Bachelor’s degree in Computer Science
            </span>{" "}
            from <span className="font-bold">Kabul Polytechnic University</span>
            , where I built a solid foundation in software engineering,
            databases, and web development. Alongside my academic studies, I
            have worked on multiple hands-on projects that strengthened my
            technical and problem-solving skills.
          </p>
          <br />

          <p>
            I have practical experience developing full-stack applications using{" "}
            <span className="font-bold">
              React.js, Node.js, Express.js, MongoDB, and MySQL
            </span>
            . I have also explored{" "}
            <span className="font-bold">Laravel and PHP</span> and understand
            their role in building scalable backend systems. My projects include
            an Inventory Management System and API-based applications where I
            applied clean code practices and modern UI/UX design principles.
          </p>

          <br />

          <p>
            I am currently seeking an{" "}
            <span className="font-bold">internship opportunity</span> where I
            can contribute to real-world projects, collaborate with experienced
            teams, and continue expanding my skills in both JavaScript and PHP
            ecosystems. I am highly motivated, fast-learning, and eager to grow
            in a professional environment.
            <br />
            If you're looking for a dedicated and enthusiastic developer, feel
            free to{" "}
            <ScrollLink
              smooth={true}
              offset={-100}
              spy={true}
              to="contact"
              className="font-bold text-teal-500 cursor-pointer hover:underline"
            >
              get in touch
            </ScrollLink>
            .
          </p>
        </div>

        <div className="md:w-1/3">
          <img src={aboutImage} alt="Profile image" width={420} />
        </div>
      </div>
    </section>
  );
}

export default About;
