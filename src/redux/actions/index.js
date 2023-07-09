export const GET_UTENTE_CORRENTE = "GET_UTENTE_CORRENTE";
export const REMOVE_UTENTE_CORRENTE = "REMOVE_UTENTE_CORRENTE";
export const GET_CURRENT_CRYPTO_DATA = "GET_CURRENT_CRYPTO_DATA";
export const GET_MONTHLY_CRYPTO_DATA = "GET_MONTHLY_CRYPTO_DATA";
export const GET_SELECTED_CRYPTO = "GET_SELECTED_CRYPTO";
export const GET_WALLET_UTENTE_CORRENTE = "GET_WALLET_UTENTE_CORRENTE";

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

export const getCurrentCryptoData = () => {
  return async dispatch => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/crypto`;
        let response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          const sortedData = [...data].sort((a, b) => a.id - b.id);
          dispatch({ type: GET_CURRENT_CRYPTO_DATA, payload: sortedData });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setInterval(fetchData, 60000);
  }
};

export const getMonthlyCryptoData = simbolo => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/crypto/monthly/${simbolo}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_MONTHLY_CRYPTO_DATA, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSelectedCrypto = simbolo => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/crypto/${simbolo}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_SELECTED_CRYPTO, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getWalletUtenteCorrente = jwtToken => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/wallet/me`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
      })
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_WALLET_UTENTE_CORRENTE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
}