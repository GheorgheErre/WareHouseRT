import { Article } from '../article/article';

export class Mouse extends Article{
    type: String;

    public toJSON(): Mouse {
        return Object.assign({}, {
            "@type": 'Mouse'
          }, this);
      }

}
