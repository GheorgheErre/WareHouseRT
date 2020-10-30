import { Product } from '../product/product'

export abstract class Article extends Product{

    constructor(){
        super();
        this.brand = "";
        this.model = "";
        this.users = "";
        this.serialNumber = "";
        this.userNumber = "";
}

    public abstract toJSON(): Article;
}
