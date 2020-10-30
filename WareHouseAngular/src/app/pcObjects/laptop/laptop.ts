import { Computer } from '../computer/computer';

export class Laptop extends Computer{

    public toJSON(): Laptop {
        return Object.assign({}, {
            "@type" : 'Laptop'
          }, this);
      }
}
