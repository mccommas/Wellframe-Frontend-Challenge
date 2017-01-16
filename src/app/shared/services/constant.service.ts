import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  getUserDetail: string = 'https://api.github.com/users/';
  starredDetailEndParameter: string = '/starred';
  getRepoDetail: string = 'https://api.github.com/repos/';
  repoEndParameter: string = '/stargazers';
  constructor() { }
}
