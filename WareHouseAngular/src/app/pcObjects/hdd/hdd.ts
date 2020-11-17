import { Component } from '../component/component';

export class Hdd extends Component{
	 capacity: String ;

	 public toJSON(): Hdd {
        return Object.assign({}, {
            "@type": 'Hdd'
          }, this);
      }
}
