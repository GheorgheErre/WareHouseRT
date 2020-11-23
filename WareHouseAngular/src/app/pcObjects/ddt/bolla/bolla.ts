import { Product } from '../../product/product';
import { Good } from '../good/good';
import { Merchandise } from '../merchandise/merchandise';
import { Recipient } from '../recipient/recipient';

export class Bolla {

    recipient : Recipient;
    cause : String;
    merchandise : Merchandise;
    annotazioni : String;
    goods: Product[];
    //goods : Good[];

    //per quanto riguarlda la data usiamo le pipe di angular
    date;

    constructor() {

    }



}
