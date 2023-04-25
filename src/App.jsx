import './App.css'
import { useState } from "react";
import fetchResults from "./utils/FetchResults";
import User from "./utils/functionUser";
import Form from "./utils/functionForm";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className="app">
      <main className="main">
        <h2>Buscador de perfiles de Github</h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <div id="results">
          <div className='results'>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App