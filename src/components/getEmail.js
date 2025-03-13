import React, { useEffect, useState } from "react";

function UserEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.electronAPI
      .getUserEmail()
      .then(response => setEmail(response))
      .catch(err => console.error(err));
  }, []);

  return <h4>E-mail corporativo: {email || "Não encontrado"}</h4>;
}

export default UserEmail;
