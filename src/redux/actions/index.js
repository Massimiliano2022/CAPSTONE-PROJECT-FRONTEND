export const GET_UTENTE_CORRENTE = "GET_UTENTE_CORRENTE";
export const REMOVE_UTENTE_CORRENTE = "REMOVE_UTENTE_CORRENTE";

export const getUtenteCorrente = utente => {

    return async dispatch => {
      try {
        const url = `http://localhost:3001/auth/login`;
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(utente),
        });
  
        if (response.ok) {
          const userData = await response.json();
          dispatch({ type: GET_UTENTE_CORRENTE, payload: userData });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const removeUtenteCorrente = () => ({
    type: REMOVE_UTENTE_CORRENTE,
  });