import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  getUserDetail: string = 'https://api.github.com/users/';
  starredDetailEndParameter: string = '/starred';
  getRepoDetail: string = 'https://api.github.com/repos/';
  repoEndParameter: string = '/stargazers';
  userRepoEndParameter: string = '/repos?client_id=b1f57d4fe25fdfcb2861&client_secret=39af1df35bef2b81085560edd3541bf1debf5cdb';
  constructor() { }
}
