
import axios from 'axios';

export function getArtist(access_token, id) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get(`https://api.spotify.com/v1/artists/${id}`, config);
}

export function getArtistAlbums(access_token, id) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, config);
}

export function getTop(access_token, type) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=50`, config);
}

export function getUserInfo(access_token) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get('https://api.spotify.com/v1/me', config);
}