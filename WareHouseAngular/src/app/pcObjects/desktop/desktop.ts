import { Computer } from '../computer/computer';

export class Desktop extends Computer{

    public toJSON(): Desktop {
        return Object.assign({}, {
            "@type" : 'Desktop'
          }, this);
      }
}
