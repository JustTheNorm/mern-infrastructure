import * as usersAPI from './users-api';


export async function signUp(userData) {
  console.log(userData)
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    console.log(token)
    
    // Baby step by returning whatever is sent back by the server
    localStorage.setItem("mernToken1", token)
    return getUser()
  }


  export function getToken() {
    const token = localStorage.getItem("mernToken1")
    if(!token) return null

    const payload = JSON.parse(atob(token.split(".")[1]))
    console.log(payload)

    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem(`mernToken1`)
      return null
    }
    return token
  }

  export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
    }