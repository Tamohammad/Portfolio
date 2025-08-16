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
            I'm <span className="font-bold">Mohammad Ahmadi</span>, a dedicated{" "}
            <span className="font-bold">Full-Stack Developer</span> from
            Afghanistan with a strong passion for technology and building
            impactful software solutions. I specialize in the{" "}
            <span className="font-bold">MERN stack</span> and enjoy developing
            clean, scalable, and efficient applications.
          </p>
          <br />

          <p>
            I hold a{" "}
            <span className="font-bold">
              Bachelor’s degree in Computer Science
            </span>{" "}
            from <span className="font-bold">Kabul Polytechnic University</span>
            , where I focused on web development, database systems, and
            algorithms. During my academic and professional journey, I have
            completed various full-stack projects using modern JavaScript
            technologies.
          </p>
          <br />

          <p>
            I have worked as a Full-Stack Developer at{" "}
            <span className="font-bold">Akramzadeh Group</span> and{" "}
            <span className="font-bold">Winsoft Technology</span>, where I built
            web applications, integrated APIs, and improved system performance.
            Additionally, I completed a React.js internship at{" "}
            <span className="font-bold">Afghan Tech Hub</span>.
          </p>

          <br />

          <p>
            I'm currently based in Afghanistan and{" "}
            <span className="font-bold">
              fully open to both remote and on-site opportunities
            </span>
            .
            <br />
            I’m eager to join innovative teams where I can expand my skills,
            drive impactful projects, and deliver exceptional results.
            <br />
            If you’re looking for a passionate developer ready to make a
            difference, don’t hesitate to{" "}
            <ScrollLink
              smooth={true}
              offset={-100}
              spy={true}
              to="contact"
              className="font-bold text-teal-500 cursor-pointer hover:underline"
            >
              get in touch!
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
