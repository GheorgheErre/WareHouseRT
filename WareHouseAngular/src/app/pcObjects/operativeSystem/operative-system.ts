import { Software } from '../software/software';

export class OperativeSystem extends Software{

    public toJSON(): OperativeSystem {
        return Object.assign({}, {
            "@type": 'OperativeSystem'
          }, this);
      }
}
