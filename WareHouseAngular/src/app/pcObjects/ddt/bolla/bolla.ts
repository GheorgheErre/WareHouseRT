import { Product } from '../../product/product';
import { Good } from '../good/good';
import { Merchandise } from '../merchandise/merchandise';
import { Recipient } from '../recipient/recipient';

export class Bolla {

    numeroDDT : number;
    anno : number;
    recipient : Recipient;
    cause : String;
    merchandise : Merchandise;
    annotazioni : String;
    goods: Product[];
    //goods : Good[];
    
    constructor() {

    }



}
