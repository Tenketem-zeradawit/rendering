function List(){
const fruits=[ { name:"banana",calorie : 95},{"apple"},{"coconat"},{"pineapple"}];

const listIteam =fruits.map(fruit => <li>{fruit}</li>);
 
fruits.sort();
 return (<ol>{listIteam}</ol>);
}

export default List