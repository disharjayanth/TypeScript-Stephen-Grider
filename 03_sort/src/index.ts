import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollections } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);;

const characterCollections = new CharacterCollections("Zyx");
characterCollections.sort();
console.log(characterCollections.data);

const linkedList = new LinkedList();
linkedList.add(400);
linkedList.add(100);
linkedList.add(555);
linkedList.add(222);
linkedList.sort();
linkedList.print();
