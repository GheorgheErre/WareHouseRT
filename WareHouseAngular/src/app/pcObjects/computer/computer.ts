import { Article } from '../article/article';
import { Component } from '../component/component';

export abstract class Computer extends Article{

    //components: Component[]
    cpu : String;
    gpu : String;
    ram : number;
    hdd: number;
    ssd: number;
    power: number;



}
