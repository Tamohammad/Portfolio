import aurora from "../assets/projects/aurora/ImageGenrator.png";
import gentile from "../assets/projects/gamehub/game.png";
import lego from "../assets/projects/lego-homage/main1.png";
import linesc from "../assets/projects/linesc/main1.png";
import listshop from "../assets/projects/list-shop/main.png";
import pathfinding from "../assets/projects/pathfinding/main.png";
import portfolio from "../assets/projects/portfolio/MAfoli.png";
import simpsons from "../assets/projects/simpsons-quotes/main1.png";
import tictactoe from "../assets/projects/tictactoe/main1.png";
import todo from "../assets/projects/todo-app/main.png";
import weather from "../assets/projects/weather-app/main1.png";
import w3l from "../assets/projects/what3letters/main1.png";

export type ProjectType = {
	id: number;
	title: string;
	about: string;
	description: string;
	thumbnail: string;
	tech: string[];
	github: string;
	link: string;
	filter: string[];
	type: string;
};

export const projects: ProjectType[] = [
	{
		id: 0,
		title: "Game Hum",
		about: "Explore video games.",
		description: "",
		thumbnail: gentile,
		tech: ["React", "TypeScript", "Chakra UI", "API"],
		github: "https://github.com/Tamohammad/game-hub.git",
		link: "https://game-nx9chny7a-mohammads-projects-01b3586c.vercel.app/",
		filter: ["All", "Web Development"],
		type: "Web Development",
	},
	{
		id: 1,
		title: "Passwork Generator",
		about: "Create strong passwords fast.",
		description: "",
		thumbnail: aurora,
		tech: ["HTML", "CSS", "JAVASCRIPT"],
		github: "https://github.com/Tamohammad/Password-generator.git",
		link: "https://password-generator-nsc5p3194-mohammads-projects-01b3586c.vercel.app",
		filter: ["All", "Software Development", "Scripts"],
		type: "Python Software",
	},
	{
		id: 2,
		title: "LinEsc Privilege Escalation",
		about: "Privilege Escalation toolkit for linux systems.",
		description: "Privilege Escalation toolkit for linux systems.",
		thumbnail: linesc,
		tech: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: ["All", "Scripts"],
		type: "Python Script",
	},
	{
		id: 3,
		title: "LEGO Homage Piece",
		about: "Homage project of LEGO.com",
		description: "",
		thumbnail: lego,
		tech: ["HTML", "CSS", "SASS"],
		github: "https://github.com/Tamohammad/LEGO-Homage-Piece.git",
		link: "https://lego-homage-piece.vercel.app/",
		filter: ["All", "Web Development"],
		type: "Frontend",
	},
	{
		id: 4,
		title: "WeatherApp",
		about: "Weather web app designed to provide real-time weather info",
		description: "",
		thumbnail: weather,
		tech: ["HTML", "SASS", "JavaScript", "OpenWeather API"],
		github: "https://github.com/Tamohammad/Weather-App.git",
		link: "https://weather-application-seven-fawn.vercel.app/",
		filter: ["All", "Web Development", "Web Application"],
		type: "Web Application",
	},
	{
		id: 5,
		title: "The Simpsons Quote Generator",
		about: 'Web application that generates quotes from "The Simpsons"',
		description: "",
		thumbnail: simpsons,
		tech: ["React", "SASS", "JavaScript"],
		github: "https://github.com/Tamohammad/React-Simpsons-Quotes.git",
		link: "https://react-simpsons-quotes-ivory.vercel.app/",
		filter: ["All", "Web Development", "Web Application"],
		type: "Web Application",
	},
	{
		id: 6,
		title: "Tic-Tac-Toe",
		about: "Classic game featuring an unbeatable AI",
		description: "",
		thumbnail: tictactoe,
		tech: ["React", "SASS", "JavaScript", "Minimax"],
		github: "https://github.com/Tamohammad/Classic-Game.git",
		link: "https://classic-game-ten.vercel.app/",
		filter: ["All", "Web Application", "Challenges"],
		type: "Web Application",
	},
	{
		id: 7,
		title: "Todo List",
		about: "Todo app challenge from Frontend Mentor",
		description: "",
		thumbnail: todo,
		tech: ["React", "Redux", "Local Storage", "SASS"],
		github: "https://github.com/Tamohammad/TODO-List.git",
		link: "https://classic-game-3u7a.vercel.app/",
		filter: ["All", "Web Application", "Challenges"],
		type: "Web Application",
	},
	{
		id: 8,
		title: "What Three Letters",
		about: "Hackathon Project - Interactive app for learning and reading",
		description: "",
		thumbnail: w3l,
		tech: ["React", "SASS", "Node"],
		github: "https://github.com/Tamohammad/Interactive-App-For-Learning--And-Reading.git",
		link: "https://interactive-app-for-learning-and-re.vercel.app/",
		filter: ["All", "Web Development", "Challenges"],
		type: "Web Application",
	},
	{
		id: 9,
		title: "Gustavo's Portfolio",
		about: "This portfolio webpage",
		description: "",
		thumbnail: portfolio,
		tech: ["React", "TypeScript", "TailwindCSS"],
		github: "https://github.com/Gunnar50/portfolio-react-ts",
		link: "https://gustavopassarella.co.uk",
		filter: ["All", "Web Application", "Web Development"],
		type: "Web Application",
	},
	{
		id: 10,
		title: "List Shop Save",
		about: "Supermarket Price Comparator Full Stack Application",
		description: "",
		thumbnail: listshop,
		tech: ["React", "Redux", "GSAP", "Node", "Express", "MySQL"],
		github: "https://github.com/Tamohammad/List-Shop.git",
		link: "",
		filter: ["All", "Web Application", "Web Development"],
		type: "Web Application",
	},
	{
		id: 11,
		title: "Pathfinding Visualiser",
		about: "Project to better understand and visualise pathfinding algorithms",
		description: "",
		thumbnail: pathfinding,
		tech: ["React", "TypeScript", "GSAP", "Pathfinding", "Algorithms"],
		github: "https://github.com/Tamohammad/Pathfinding-visualiser.git",
		link: "https://pathfinding-visualiser-two.vercel.app/#",
		filter: ["All", "Challenges"],
		type: "Web Application",
	},
];
