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
            I'm <span className="font-bold">Mohammad Ahmadi</span>, a passionate
            and results-driven{" "}
            <span className="font-bold">Full-Stack Developer</span> with{" "}
            <span className="font-bold">
              over 3 years of professional experience
            </span>{" "}
            building modern, scalable, and high-performance web applications. I
            specialize in the <span className="font-bold">MERN stack</span> and
            focus on writing clean, maintainable code while delivering efficient
            and user-focused solutions.
          </p>
          <br />

          <p>
            I hold a{" "}
            <span className="font-bold">
              Bachelor’s degree in Computer Science
            </span>{" "}
            from <span className="font-bold">Kabul Polytechnic University</span>
            , where I developed a strong foundation in software engineering,
            database systems, and algorithms. My academic journey, combined with
            hands-on experience, has enabled me to successfully design and
            implement full-stack applications using modern JavaScript
            technologies.
          </p>
          <br />

          <p>
            Throughout my career, I have worked as a Full-Stack Developer at{" "}
            <span className="font-bold">Akramzadeh Group</span> and{" "}
            <span className="font-bold">Winsoft Technology</span>, where I
            contributed to developing robust web applications, integrating
            RESTful APIs, and optimizing system performance. I also completed a
            professional internship in{" "}
            <span className="font-bold">React.js</span> at{" "}
            <span className="font-bold">Afghan Tech Hub</span>, further
            strengthening my front-end development expertise.
          </p>

          <br />

          <p>
            Based in Afghanistan, I am{" "}
            <span className="font-bold">
              open to both remote and on-site opportunities
            </span>
            . I am highly motivated to collaborate with innovative teams,
            continuously grow my skill set, and contribute to impactful and
            meaningful projects.
            <br />
            If you're looking for a dedicated developer who combines technical
            expertise with a strong work ethic, feel free to{" "}
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
