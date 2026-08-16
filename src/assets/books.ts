import prideAndPrejudice from "./pride-and-prejudice.jpg";
import theGreatGatsby from "./the-great-gatsby.jpg";
import crimeAndPunishment from "./crime-and-punishment.jpg";
import janeEyre from "./jane-eyre.jpg";
import emma from "./emma.jpg";

type Book = {
  _id: string;
  title: string;
  author: string;
  description: string;
  pageCount: number;
  image: string;
  price: number;
};

export const books: Book[] = [
  {
    _id: "BC-1001",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.",
    pageCount: 448,
    image: prideAndPrejudice,
    price: 499,
  },
  {
    _id: "BC-1002",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "Alternate covers of this ISBN can be found here, here and here.\n \nJames L. W. West III to include the author’s final revisions and features a note on the composition and text, a personal foreword by Fitzgerald’s granddaughter, Eleanor Lanahan—and a new introduction by two-time National Book Award winner Jesmyn Ward.\n \nThe Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
    pageCount: 180,
    image: theGreatGatsby,
    price: 399,
  },
  {
    _id: "BC-1003",
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    description:
      "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat-and-mouse with Porfiry, a suspicious detective, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden prostitute, can offer the chance of redemption. As the ensuing investigation and trial reveal the true identity of the murderer, Dostoyevsky's dark masterpiece evokes a world where the lines between innocence and corruption, good and evil, blur and everyone's faith in humanity is tested.",
    pageCount: 671,
    image: crimeAndPunishment,
    price: 460,
  },
  {
    _id: "BC-1004",
    title: "Jane Eyre",
    author: "Charlotte Brontë's",
    description:
      "A gothic masterpiece of tempestuous passions and dark secrets, Charlotte Brontë's Jane Eyre is edited with an introduction and notes by Stevie Davis in Penguin Classics.\n \n Charlotte Brontë tells the story of orphaned Jane Eyre, who grows up in the home of her heartless aunt, enduring loneliness and cruelty. This troubled childhood strengthens Jane's natural independence and spirit - which prove necessary when she finds employment as a governess to the young ward of Byronic, brooding Mr Rochester. As her feelings for Rochester develop, Jane gradually uncovers Thornfield Hall's terrible secret, forcing her to make a choice. Should she stay with Rochester and live with the consequences, or follow her convictions - even if it means leaving the man she loves? A novel of intense power and intrigue, Jane Eyre dazzled readers with its passionate depiction of a woman's search for equality and freedom.",
    pageCount: 532,
    image: janeEyre,
    price: 499,
  },
  {
    _id: "BC-1005",
    title: "Emma",
    author: "Jane Austen",
    description:
      "Emma Woodhouse is one of Austen's most captivating and vivid characters. Beautiful, spoilt, vain and irrepressibly witty, Emma organizes the lives of the inhabitants of her sleepy little village and plays matchmaker with devastating effect.",
    pageCount: 474,
    image: emma,
    price: 584,
  },
];
