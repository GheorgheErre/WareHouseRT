import { Article } from '../article/article';

export class Cable extends Article {

    type: string;

    public toJSON(): Cable {
        return Object.assign({}, {
            "@type" : 'Cable'
          }, this);
      }
}
