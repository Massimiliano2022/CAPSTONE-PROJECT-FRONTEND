//LOGIN
export const GET_UTENTE_CORRENTE = "GET_UTENTE_CORRENTE";
export const LOGIN_LOADING_ON = "LOGIN_LOADING_ON";
export const LOGIN_LOADING_OFF = "LOGIN_LOADING_OFF";
export const GET_LOGIN_LOADING = "GET_LOGIN_LOADING";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REMOVE_LOGIN_ERROR = "REMOVE_LOGIN_ERROR";
export const REMOVE_UTENTE_CORRENTE = "REMOVE_UTENTE_CORRENTE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_SUCCESS_RESET = "LOGIN_SUCCESS_RESET";

//REGISTRA UTENTE
export const POST_REGISTRA_UTENTE = "POST_REGISTRA_UTENTE";
export const REGISTRA_LOADING_ON = "REGISTRA_LOADING_ON";
export const REGISTRA_LOADING_OFF = "REGISTRA_LOADING_OFF";
export const GET_REGISTRA_LOADING = "GET_REGISTRA_LOADING";
export const REGISTRA_ERROR = "REGISTRA_ERROR";
export const REMOVE_REGISTRA_ERROR = "REMOVE_REGISTRA_ERROR";
export const REGISTRA_SUCCESS = "REGISTRA_SUCCESS";
export const REGISTRA_SUCCESS_RESET = "REGISTRA_SUCCESS_RESET";

//CURRENT CRYPTO DATA
export const GET_CURRENT_CRYPTO_DATA = "GET_CURRENT_CRYPTO_DATA";

//SELECTED CRYPTO
export const GET_SELECTED_CRYPTO = "GET_SELECTED_CRYPTO";


//MONTHLY CRYPTO DATA
export const GET_MONTHLY_CRYPTO_DATA = "GET_MONTHLY_CRYPTO_DATA";

//WALLET
export const GET_WALLET_CORRENTE = "GET_WALLET_CORRENTE";
export const REMOVE_WALLET_UTENTE_CORRENTE = "REMOVE_WALLET_UTENTE_CORRENTE";

//OPERAZIONE
export const ESEGUI_OPERAZIONE = "ESEGUI_OPERAZIONE";
export const OPERAZIONE_LOADING_ON = "OPERAZIONE_LOADING_ON";
export const OPERAZIONE_LOADING_OFF = "OPERAZIONE_LOADING_OFF";
export const GET_OPERAZIONE_LOADING = "GET_OPERAZIONE_LOADING";
export const GET_OPERAZIONE_ERROR = "GET_OPERAZIONE_ERROR";
export const REMOVE_OPERAZIONE_ERROR = "REMOVE_OPERAZIONE_ERROR";
export const OPERAZIONE_SUCCESS = "OPERAZIONE_SUCCESS";
export const OPERAZIONE_SUCCESS_RESET = "OPERAZIONE_SUCCESS_RESET";

//LOGIN
export const getUtenteCorrente = (utente) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: LOGIN_LOADING_ON
      });
      let response = await fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });
      if (response.ok) {
        let userData = await response.json();
        dispatch({ type: GET_UTENTE_CORRENTE, payload: userData });
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        let error = await response.json();
        dispatch({ type: LOGIN_ERROR, payload: error });
      }
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: "Errore in fase di login : " + error.message });
    } finally {
      dispatch({ type: LOGIN_LOADING_OFF });
    }
  };
};

export const getLoginLoading = () => ({
  type: GET_LOGIN_LOADING,
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error
});

export const removeLoginError = () => ({
  type: REMOVE_LOGIN_ERROR,
});

export const removeUtenteCorrente = () => ({
  type: REMOVE_UTENTE_CORRENTE,
});

export const loginSuccessReset = () => ({
  type: LOGIN_SUCCESS_RESET,
})

//REGISTRA
export const registraUtente = (utente) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: REGISTRA_LOADING_ON
      });
      let response = await fetch(`http://localhost:3001/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });
      if (response.ok) {
        let userData = await response.json();
        dispatch({ type: POST_REGISTRA_UTENTE, payload: userData });
        dispatch({ type: REGISTRA_SUCCESS });
      } else {
        let error = await response.json();
        dispatch({ type: REGISTRA_ERROR, payload: error });
      }
    } catch (error) {
      dispatch({ type: REGISTRA_ERROR, payload: "Errore in fase di registrazione : " + error.message });
    } finally {
      dispatch({ type: REGISTRA_LOADING_OFF });
    }
  };
};

export const getRegistraLoading = () => ({
  type: GET_REGISTRA_LOADING,
});

export const registraError = error => ({
  type: REGISTRA_ERROR,
  payload: error
});

export const removeRegistraError = () => ({
  type: REMOVE_REGISTRA_ERROR,
});

export const registraSuccessReset = () => ({
  type: REGISTRA_SUCCESS_RESET,
})

// CURRENT CRYPTO DATA
export const getCurrentCryptoData = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`http://localhost:3001/crypto`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        let sortedData = [...data].sort((a, b) => a.id - b.id);
        dispatch({ type: GET_CURRENT_CRYPTO_DATA, payload: sortedData });
      } else {
        let error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//SELECTED CRYPTO
export const getSelectedCrypto = simbolo => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`http://localhost:3001/crypto/${simbolo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_SELECTED_CRYPTO, payload: data });
      } else {
        let error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//MONTHLY CRYPTO DATA
export const getMonthlyCryptoData = simbolo => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`http://localhost:3001/crypto/monthly/${simbolo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_MONTHLY_CRYPTO_DATA, payload: data });
      } else {
        let error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//WALLET
export const getWalletUtenteCorrente = jwtToken => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`http://localhost:3001/wallet/me`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_WALLET_CORRENTE, payload: data });
      } else {
        let error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeWalletUtenteCorrente = () => ({
  type: REMOVE_WALLET_UTENTE_CORRENTE,
});

//OPERAZIONE
export const effettuaOperazione = (jwtToken, operazione) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: OPERAZIONE_LOADING_ON});
      dispatch({type: OPERAZIONE_SUCCESS_RESET});
      let response = await fetch(`http://localhost:3001/operazioni`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtToken
        },
        body: JSON.stringify(operazione),
      });
      if (response.ok) {
        let operazione = await response.json();
        dispatch({ type: ESEGUI_OPERAZIONE, payload: operazione });
        dispatch({ type: OPERAZIONE_SUCCESS });
        console.log(operazione);
      } else {
        let error = await response.json();
        dispatch({ type: GET_OPERAZIONE_ERROR, payload: error.message });
        console.log(error);
      }
    } catch (error) {
      dispatch({ type: GET_OPERAZIONE_ERROR, payload: "Errore durante operazione : " + error.message });
    } finally {
      dispatch({ type: OPERAZIONE_LOADING_OFF });
    }
  };
};

export const getOperazioneLoading = () => ({
  type: GET_OPERAZIONE_LOADING,
});

export const getOperazioneError = error => ({
  type: GET_OPERAZIONE_ERROR,
  payload: error
});

export const removeOperazioneError = () => ({
  type: REMOVE_OPERAZIONE_ERROR,
});

export const operazioneSuccessReset = () => ({
  type: OPERAZIONE_SUCCESS_RESET,
})

