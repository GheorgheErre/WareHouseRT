import { Article } from '../article/article';

export class Cellphone extends Article{
    imeiCode: String;
	operator: String;
	phoneNumber: String;
	rateTypology: String;

	public toJSON(): Cellphone {
        return Object.assign({}, {
            "@type": 'Cellphone'
          }, this);
      }
}
