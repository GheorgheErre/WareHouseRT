import { Article } from '../article/article';
import { Computer } from '../computer/computer';

export class Software extends Article{

    productKey: String;
    associatedComputer: Computer;

    public toJSON(): Software {
        return Object.assign({}, {
            "@type" : 'Software'
          }, this);
      }

}
