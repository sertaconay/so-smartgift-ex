
import actionTypes from '../core/actionTypes';
import InstagramAPI from '../core/api';


const instaAPI = new InstagramAPI();

export default function getUserMedia() {
  return {
    type: actionTypes.GET_MEDIA_OF_SINGLE_USER,
    data: instaAPI.getAllMediaOfUser(),
  };
}
