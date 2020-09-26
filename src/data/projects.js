import { v4 as uuidv4 } from "uuid";
import moviecloudImage from "../assets/jimanji-backdrop.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "MovieCloud",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit voluptatem accusamus omnis et odit, inventore tempore illum iusto deserunt atque deleniti ratione magni rerum? Porro nam eum quidem velit.Quibusdam quod aperiam assumenda iste, sed quisquam nemo praesentium error laudantium. Enim quisquam explicabo, nulla officiis dolor eos perferendis sint debitis quas facere ut iure nam dolorem consequuntur repudiandae nobis.",
    technologies: [
      { id: uuidv4(), name: "React.js" },
      { id: uuidv4(), name: "Redux" },
      { id: uuidv4(), name: "Sass" },
      { id: uuidv4(), name: "Framer Motion" },
    ],

    image: moviecloudImage,
    website: "https://www.moviecloud.com.au",
    github: "https://github.com/kylelambert001/movie-cloud",
    path: "/projects/moviecloud",
  },
  {
    id: uuidv4(),
    name: "MovieCloud",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit voluptatem accusamus omnis et odit, inventore tempore illum iusto deserunt atque deleniti ratione magni rerum? Porro nam eum quidem velit.Quibusdam quod aperiam assumenda iste, sed quisquam nemo praesentium error laudantium. Enim quisquam explicabo, nulla officiis dolor eos perferendis sint debitis quas facere ut iure nam dolorem consequuntur repudiandae nobis.",
    technologies: [
      { id: uuidv4(), name: "React.js" },
      { id: uuidv4(), name: "Redux" },
      { id: uuidv4(), name: "Sass" },
      { id: uuidv4(), name: "Framer Motion" },
    ],

    image: moviecloudImage,
    website: "https://www.moviecloud.com.au",
    github: "https://github.com/kylelambert001/movie-cloud",
    path: "/projects/moviecloud",
  },
];

export default projects;
