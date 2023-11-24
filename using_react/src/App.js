import "./App.css";
import LoadUser from "./component/LoadUser/LoadUser";

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
    </div>
  );
}

// function LoadUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   return (
//     <div>
//       {users.map((user) => (
//         <DisplayUser name={user.name} email={user.email}></DisplayUser>
//       ))}
//     </div>
//   );
// }

// function DisplayUser(pros) {
//   return (
//     <div style={{ border: "2px solid red", margin: "20px" }}>
//       <h3>Name: {pros.name}</h3>
//       <h5>Email: {pros.email}</h5>
//     </div>
//   );
// }

export default App;
