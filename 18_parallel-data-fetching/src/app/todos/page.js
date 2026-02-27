async function fetchData(url){
  const response = await fetch(url);
  return await response.json();
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos?_limit=5",
  "https://procodrr.vercel.app/?sleep=2000",
  "https://procodrr.vercel.app/?sleep=3000"
]

const Todos = async () => {
  //from line 3-14 the sequential call is happening
  /*const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();

  const slowResponse2s = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data2s = await slowResponse2s.json();
  console.log(data2s);

  const slowResponse3s = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data3s = await slowResponse3s.json();
  console.log(data3s);
*/

  //parallel data fetching
  const [todos, data2s, data3s] = await Promise.all(urls.map(url => fetchData(url)));


    // const [todos, data2s, data3s] = await Promise.all([todosResponse.json(), slow2sResponse.json(), slow3sResponse.json()]);
    
  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div>{JSON.stringify(data2s)}</div>
      <div>{JSON.stringify(data3s)}</div>
    </>
  );
};

export default Todos;


git commit -m "use Promise.all for parallel data fetching in Todos component
1- understood the problem of sequential data fetching and how it can lead to increased load times.
2- implemented parallel data fetching using Promise.all to fetch todos and simulate slow responses concurrently.
3- ensured that the UI renders only after all data is fetched, improving performance and user experience.
4- this practice is best if the data sources are independent and can be fetched simultaneously without waiting for each other, if they are depenedent then we can use sequential data fetching."