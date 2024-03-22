import dogs_img from "@/assets/images/projects/project-dogs-ilus.jpeg";
import chatbot_img from "@/assets/images/projects/project-chatbot-ilus.jpeg";
import todo_img from "@/assets/images/projects/project-todo-ilus.jpeg";

const projects = [
  {
    image: dogs_img,
    name: "Dogs",
    src: "https://github.com/ogustavodias/dogs-v2",
    deploy: "https://dogs-v2-2y4182d9z-gustavos-projects-1135684d.vercel.app/",
    resume: "Projeto que consiste em uma rede social para compartilhar fotos de cachorros. Nele é possível a criação de conta, login, postagens, comentários e há também uma página que exibe as estatísticas das postagens feitas.",
    techs: ["React"],
  },
  {
    image: chatbot_img,
    name: "ChatBot",
    src: "https://github.com/ogustavodias/chatbot-v2",
    deploy: "https://chatbot-v2-tau.vercel.app/",
    resume: "Chatbot totalmente funcional, que faz do uso da API da OpenAI, desenvolvedora do famoso CHATGPT. Para o devido funcionamento é necessário uma chave que pode ser obtida através do link https://platform.openai.com/.",
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    image: todo_img,
    name: "TODO-LIST",
    src: "https://github.com/ogustavodias/to-do-list",
    deploy: "https://to-do-list-neon-seven.vercel.app/",
    resume:
      "Aplicação todo-list, onde é possível cadastrar, mudar o status e filtrar tarefas. Projeto desenvolvido sem uso de bibliotecas e/ou frameworks, com o intuito de aprofundar os conhecimentos no JavaScript nativo.",
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default projects;
