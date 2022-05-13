import axios from 'axios'

export async function login () {
    try {
        const response = await axios.get('https://provi-hack.herokuapp.com/api/users/');
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }