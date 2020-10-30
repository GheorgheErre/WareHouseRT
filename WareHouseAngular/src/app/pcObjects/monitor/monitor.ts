import { Article } from '../article/article';

export class Monitor extends Article {

    inches: number;
    frequence: number;
    resolution: number;

    public toJSON(): Monitor {
        return Object.assign({}, {
            "@type" : 'Monitor'
          }, this);
      }
}
