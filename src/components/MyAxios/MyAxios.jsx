import axios from "axios";

axios.defaults.baseURL = "http://localhost:8084/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () =>{
    return window.localStorage.getItem("auth_token");
};

export const setAuthToken = (token) =>{
    window.localStorage.setItem("auth_token", token);
};

export const getStoredPlayerNick = () =>{
    return window.localStorage.getItem("player_nick");
};

export const setStoredPlayerNick = (nick) =>{
    window.localStorage.setItem("player_nick", nick);
};

export const request = (method, url, data) =>{
    let headers = {};

    if (getAuthToken() !== null && getAuthToken() !== "null" && getAuthToken() !== "undefined"){
        headers = {"Authorization": `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    });
};