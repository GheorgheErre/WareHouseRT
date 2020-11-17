import { Component } from '../component/component';

export class Ram extends Component{
	 capacity: String ;
	 frequencies: String ;

	 public toJSON(): Ram {
        return Object.assign({}, {
            "@type": 'Ram'
          }, this);
      }
}
