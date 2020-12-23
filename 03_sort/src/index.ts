import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollections } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const characterCollections = new CharacterCollections("Zyx");
const charSorter = new Sorter(characterCollections);
charSorter.sort();
console.log(characterCollections.data);

const linkedList = new LinkedList();
linkedList.add(400);
linkedList.add(100);
linkedList.add(555);
linkedList.add(222);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
