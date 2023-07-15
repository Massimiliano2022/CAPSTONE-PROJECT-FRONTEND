//LOGIN
export const GET_UTENTE_CORRENTE = "GET_UTENTE_CORRENTE";
export const LOGIN_LOADING_ON = "LOGIN_LOADING_ON";
export const LOGIN_LOADING_OFF ="LOGIN_LOADING_OFF";
export const GET_LOGIN_LOADING = "GET_LOGIN_LOADING";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REMOVE_LOGIN_ERROR ="REMOVE_LOGIN_ERROR";
export const REMOVE_UTENTE_CORRENTE = "REMOVE_UTENTE_CORRENTE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_SUCCESS_RESET ="LOGIN_SUCCESS_RESET"; 

//REGISTRA UTENTE
export const POST_REGISTRA_UTENTE ="POST_REGISTRA_UTENTE";
export const REGISTRA_LOADING_ON ="REGISTRA_LOADING_ON";
export const REGISTRA_LOADING_OFF ="REGISTRA_LOADING_OFF";
export const GET_REGISTRA_LOADING ="GET_REGISTRA_LOADING";
export const REGISTRA_ERROR = "REGISTRA_ERROR";
export const REMOVE_REGISTRA_ERROR ="REMOVE_REGISTRA_ERROR";
export const REGISTRA_SUCCESS = "REGISTRA_SUCCESS";
export const REGISTRA_SUCCESS_RESET ="REGISTRA_SUCCESS_RESET";

//CURRENT CRYPTO DATA
export const GET_CURRENT_CRYPTO_DATA = "GET_CURRENT_CRYPTO_DATA";
export const GET_CRYPTO_DATA_LOADING_ON="GET_CRYPTO_DATA_LOADING_ON";
export const GET_CRYPTO_DATA_LOADING_OFF="GET_CRYPTO_DATA_LOADING_OFF";
export const GET_CRYPTO_DATA_LOADING="GET_CRYPTO_DATA_LOADING";
export const GET_CRYPTO_DATA_ERROR="GET_CRYPTO_DATA_ERROR";
export const REMOVE_CRYPTO_DATA_ERROR="REMOVE_CRYPTO_DATA_ERROR";
export const CRYPTO_DATA_SUCCESS="CRYPTO_DATA_SUCCESS";
export const CRYPTO_DATA_SUCCESS_RESET="CRYPTO_DATA_SUCCESS_RESET";

//SELECTED CRYPTO
export const GET_SELECTED_CRYPTO = "GET_SELECTED_CRYPTO";
export const GET_SELECTED_CRYPTO_LOADING_ON = "GET_SELECTED_CRYPTO_LOADING_ON";
export const GET_SELECTED_CRYPTO_LOADING_OFF = "GET_SELECTED_CRYPTO_LOADING_OFF";
export const GET_SELECTED_CRYPTO_LOADING ="GET_SELECTED_CRYPTO_LOADING";
export const GET_SELECTED_CRYPTO_ERROR ="GET_SELECTED_CRYPTO_ERROR";
export const REMOVE_SELECTED_CRYPTO_ERROR="REMOVE_SELECTED_CRYPTO_ERROR";
export const SELECTED_CRYPTO_SUCCESS="SELECTED_CRYPTO_SUCCESS";
export const SELECTED_CRYPTO_SUCCESS_RESET="SELECTED_CRYPTO_SUCCESS_RESET"; 

//MONTHLY CRYPTO DATA
export const GET_MONTHLY_CRYPTO_DATA = "GET_MONTHLY_CRYPTO_DATA";
export const GET_MONTHLY_CRYPTO_DATA_LOADING_ON = "GET_MONTHLY_CRYPTO_DATA_LOADING_ON";
export const GET_MONTHLY_CRYPTO_DATA_LOADING_OFF ="GET_MONTHLY_CRYPTO_DATA_LOADING_OFF";
export const GET_MONTHLY_CRYPTO_DATA_LOADING ="GET_MONTHLY_CRYPTO_DATA_LOADING";
export const GET_MONTHLY_CRYPTO_DATA_ERROR ="GET_MONTHLY_CRYPTO_DATA_ERROR";
export const REMOVE_MONTHLY_CRYPTO_DATA_ERROR ="REMOVE_MONTHLY_CRYPTO_DATA_ERROR";
export const MONTHLY_CRYPTO_DATA_SUCCESS ="MONTHLY_CRYPTO_DATA_SUCCESS";
export const MONTHLY_CRYPTO_DATA_SUCCESS_RESET = "MONTHLY_CRYPTO_DATA_SUCCESS_RESET";

export const GET_WALLET_UTENTE_CORRENTE = "GET_WALLET_UTENTE_CORRENTE";
export const REMOVE_WALLET_UTENTE_CORRENTE = "REMOVE_WALLET_UTENTE_CORRENTE";
export const POST_OPERAZIONE = "POST_OPERAZIONE";

//LOGIN
export const getUtenteCorrente = (utente) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: LOGIN_LOADING_ON
      });
      let response = await fetch( `http://localhost:3001/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });
      if (response.ok) {
        let userData = await response.json();
        dispatch({ type: GET_UTENTE_CORRENTE, payload: userData });
        dispatch({type:LOGIN_SUCCESS});
      } else {
        let error = await response.json();
        dispatch({ type: LOGIN_ERROR, payload: error });
      }
    } catch (error) {
      dispatch({type: LOGIN_ERROR,payload: "Errore nel reperimento dei dati: " + error.message});
    } finally {
      dispatch({type: LOGIN_LOADING_OFF});
    }
  };
};

export const getLoginLoading = () => ({
  type:GET_LOGIN_LOADING,
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

export const loginSuccessReset=() => ({
  type:LOGIN_SUCCESS_RESET,
})

//REGISTRA
export const registraUtente = (utente) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: REGISTRA_LOADING_ON
      });
      let response = await fetch( `http://localhost:3001/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });
      if (response.ok) {
        let userData = await response.json();
        dispatch({ type: POST_REGISTRA_UTENTE, payload: userData });
        dispatch({type:REGISTRA_SUCCESS});
      } else {
        let error = await response.json();
        dispatch({ type: REGISTRA_ERROR, payload: error });
      }
    } catch (error) {
      dispatch({type: REGISTRA_ERROR,payload: "Errore nel reperimento dei dati: " + error.message});
    } finally {
      dispatch({type: REGISTRA_LOADING_OFF});
    }
  };
};

export const getRegistraLoading = () => ({
  type:GET_REGISTRA_LOADING,
});

export const registraError = error => ({
  type: REGISTRA_ERROR,
  payload: error
});

export const removeRegistraError = () => ({
  type: REMOVE_REGISTRA_ERROR,
});

export const registraSuccessReset=() => ({
  type:REGISTRA_SUCCESS_RESET,
})

// CURRENT CRYPTO DATA
export const getCurrentCryptoData = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CRYPTO_DATA_LOADING_ON
      });
      let response = await fetch( `http://localhost:3001/crypto`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        let sortedData = [...data].sort((a, b) => a.id - b.id);
        dispatch({ type: GET_CURRENT_CRYPTO_DATA, payload: sortedData });
        dispatch({type:CRYPTO_DATA_SUCCESS});
        dispatch({type:REMOVE_CRYPTO_DATA_ERROR});
      } else {
        let error = await response.json();
        dispatch({ type: GET_CRYPTO_DATA_ERROR, payload: error });
        dispatch({type:CRYPTO_DATA_SUCCESS_RESET});
      }
    } catch (error) {
      dispatch({type: GET_CRYPTO_DATA_ERROR,payload: "Errore nel reperimento dei dati: " + error.message});
      dispatch({type:CRYPTO_DATA_SUCCESS_RESET});
    } finally {
      dispatch({type: GET_CRYPTO_DATA_LOADING_OFF});
    }
  };
};

export const getCryptoDataLoading = () => ({
  type:GET_CRYPTO_DATA_LOADING,
});

export const getCryptoDataError = error => ({
  type: GET_CRYPTO_DATA_ERROR,
  payload: error
});

export const removeCryptoDataError = () => ({
  type: REMOVE_CRYPTO_DATA_ERROR,
});

export const cryptoDataSuccessReset=() => ({
  type:CRYPTO_DATA_SUCCESS_RESET,
})

//SELECTED CRYPTO
export const getSelectedCrypto = simbolo => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_SELECTED_CRYPTO_LOADING_ON
      });
      let response = await fetch( `http://localhost:3001/crypto/${simbolo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_SELECTED_CRYPTO, payload: data });
        dispatch({type:SELECTED_CRYPTO_SUCCESS});
        dispatch({type:REMOVE_SELECTED_CRYPTO_ERROR});
      } else {
        let error = await response.json();
        dispatch({ type: GET_SELECTED_CRYPTO_ERROR, payload: error });
        dispatch({type:SELECTED_CRYPTO_SUCCESS_RESET});
      }
    } catch (error) {
      dispatch({type: GET_SELECTED_CRYPTO_ERROR,payload: "Errore nel reperimento dei dati: " + error.message});
      dispatch({type:SELECTED_CRYPTO_SUCCESS_RESET});
    } finally {
      dispatch({type: GET_SELECTED_CRYPTO_LOADING_OFF});
    }
  };
};

export const getSelectedCryptoLoading = () => ({
  type:GET_SELECTED_CRYPTO_LOADING,
});

export const getSelectedCryptoError = error => ({
  type: GET_SELECTED_CRYPTO_ERROR,
  payload: error
});

export const removeSelectedCryptoError = () => ({
  type: REMOVE_SELECTED_CRYPTO_ERROR,
});

export const selectedCryptoSuccessReset=() => ({
  type:SELECTED_CRYPTO_SUCCESS_RESET,
})


//MONTHLY CRYPTO DATA
/*export const getMonthlyCryptoData = simbolo => {
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
};*/

//MONTHLY CRYPTO DATA
export const getMonthlyCryptoData = simbolo => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_MONTHLY_CRYPTO_DATA_LOADING_ON
      });
      let response = await fetch( `http://localhost:3001/crypto/monthly/${simbolo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_MONTHLY_CRYPTO_DATA, payload: data });
        dispatch({type:MONTHLY_CRYPTO_DATA_SUCCESS});
        dispatch({type:REMOVE_MONTHLY_CRYPTO_DATA_ERROR});
      } else {
        let error = await response.json();
        dispatch({ type: GET_MONTHLY_CRYPTO_DATA_ERROR, payload: error });
        dispatch({type:MONTHLY_CRYPTO_DATA_SUCCESS_RESET});
      }
    } catch (error) {
      dispatch({type: GET_MONTHLY_CRYPTO_DATA_ERROR,payload: "Errore nel reperimento dei dati: " + error.message});
      dispatch({type:MONTHLY_CRYPTO_DATA_SUCCESS});
    } finally {
      dispatch({type: GET_MONTHLY_CRYPTO_DATA_LOADING_OFF});
    }
  };
};

export const getMonthlyCryptoDataLoading = () => ({
  type:GET_MONTHLY_CRYPTO_DATA_LOADING,
});

export const getMonthlyCryptoDataError = error => ({
  type: GET_MONTHLY_CRYPTO_DATA_ERROR,
  payload: error
});

export const removeMonthlyCryptoDataError = () => ({
  type: REMOVE_MONTHLY_CRYPTO_DATA_ERROR,
});

export const monthlyCryptoDataSuccessReset=() => ({
  type:MONTHLY_CRYPTO_DATA_SUCCESS,
})

//WALLET
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

export const removeWalletUtenteCorrente = () => ({
  type: REMOVE_WALLET_UTENTE_CORRENTE,
});

export const postOperazione = (jwtToken, operazione) => {
  return async () => {
    try {
      const response = await fetch(`http://localhost:3001/operazioni`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtToken
        },
        body: JSON.stringify(operazione),
      });
      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
}