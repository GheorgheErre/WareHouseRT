import { Product } from '../product/product'

export abstract class Article extends Product{

    public abstract toJSON(): Article;
}
