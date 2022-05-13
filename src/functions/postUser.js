import axios from 'axios'

export function postUser (name, email){
    axios(
        {
            method: 'post',
            url: 'https://provi-hack.herokuapp.com/api/create/users/',
            data: {
              name: name,
              email: email
            }
          });
}