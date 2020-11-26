import { Article } from '../article/article';

export class Token extends Article{

    public toJSON(): Token {
        return Object.assign({}, {
            "@type": 'Token'
          }, this);
      }

}
