import dogs_img from "@/assets/images/projects/project-dogs-ilus.jpeg";
import chatbot_img from "@/assets/images/projects/project-chatbot-ilus.jpeg";
import todo_img from "@/assets/images/projects/project-todo-ilus.jpeg";
import dashboard_img from "@/assets/images/projects/project-dashboard-ilus.jpeg";
import restaurant_img from "@/assets/images/projects/project-restaurant-cart.jpeg";

const projects = [
  {
    image: dogs_img,
    name: "Dogs",
    src: "https://github.com/ogustavodias/dogs-v2",
    deploy: "https://dogs-v2-2y4182d9z-gustavos-projects-1135684d.vercel.app/",
    resume:
      "Projeto que consiste em uma rede social para compartilhar fotos de cachorros. Nele é possível a criação de conta, login, postagens, comentários e há também uma página que exibe as estatísticas das postagens feitas.",
    techs: ["React"],
  },
  {
    image: chatbot_img,
    name: "ChatBot",
    src: "https://github.com/ogustavodias/chatbot-v2",
    deploy: "https://chatbot-v2-tau.vercel.app/",
    resume:
      "Chatbot totalmente funcional, que faz do uso da API da OpenAI, desenvolvedora do famoso CHATGPT. Para o devido funcionamento é necessário uma chave que pode ser obtida através do link https://platform.openai.com/.",
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    image: todo_img,
    name: "TODO-LIST",
    src: "https://github.com/ogustavodias/minhas-tarefas",
    deploy: "https://minhas-tarefas-two-puce.vercel.app/",
    resume:
      "Aplicação todo-list, onde é possível cadastrar, editar e filtrar tarefas. Projeto desenvolvido com React e Redux para o gerenciamento do estado global da aplicação.",
    techs: ["React", "Redux", "React Router", "Styled-components"],
  },
  {
    image: dashboard_img,
    name: "Sales dashboard",
    src: "https://github.com/ogustavodias/dashboard-webapp",
    deploy: "https://dashboard-webapp-theta.vercel.app/",
    resume:
      "Dashboard que faz uso de uma API que gera dados de vendas fictícias para os últimos 90 dias.",
    techs: ["React", "TypeScript"],
  },
  {
    image: restaurant_img,
    name: "Restaurant Cart",
    src: "https://github.com/ogustavodias/product_list_with_cart",
    deploy: "https://product-list-with-cart-ashy.vercel.app/",
    resume:
      "Página de produtos de um restaurante com carrinho funcional, cujo estado é controlado através do Redux.",
    techs: ["React", "TypeScript", "Redux", "Styled-components"],
  },
];

export default projects;
