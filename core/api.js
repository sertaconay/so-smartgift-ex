import fetch from 'isomorphic-fetch';


export default class InstagramAPI {
  constructor() {
    this.instagramAPI = 'https://api.instagram.com/v1';
    this.userID = '5955180865';
    this.clientID = 'e097439da7034238a474a2a1e30b404b';
    this.accessToken = '470934347.e097439.78e94c9865134e30893011363d61a895';
  }

  async getAllMediaOfUser(maxID = '') {
    const res = await fetch(`${this.instagramAPI}/users/${this.userID}/media/recent/?access_token=${this.accessToken}&count=4&max_id=${maxID}`);
    const data = await res.json();
    return data;
  }

  async getAllMediaOfTag(tagName) {
    const res = await fetch(`${this.instagramAPI}/tags/${tagName}/media/recent?access_token=${this.accessToken}`);
    const data = await res.json();
    return data;
  }
}
