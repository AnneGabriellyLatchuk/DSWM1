import React, {useState} from 'react';

function App() {
  const [tarefas, setTarefas] = useState(
    ['Estudar React', 'Tomar Banho', 'Academia']
  );
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    setTarefas([...tarefas, input]);
    setInput("");
  }
}