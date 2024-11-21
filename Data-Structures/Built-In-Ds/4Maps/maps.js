// Creating a Map
const map = new Map([['a', 1], ['b', 2]]);
// To add a key value pair to a map
map.set('c', 3);
map.set('d', 4);
// To delete an item from a map
map.delete('c');
// To check if an item is in a map
console.log(map.has('b'))
// To get the total number of items in a map
console.log(map.size)
for(const [key, value] of map){
    console.table(`${key} : ${value}`)
}
// To clear all items in a Map
map.clear()