import React, { useEffect, useState } from "react";

function Username() {
  const [user, setUser] = useState("");

  useEffect(() => {
    window.electronAPI
      .getUser()
      .then(response => setUser(response))
      .catch(err => console.error(err));
  }, []);

  return <div>Usuário atual: {user}</div>;
}

export default Username;