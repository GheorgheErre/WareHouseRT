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

    constructor(){
        super();
        this.cpu = "";
        this.gpu = "";
        this.ram = 0;
        this.hdd = 0;
        this.ssd = 0;
        this.power = 0;
}


}
