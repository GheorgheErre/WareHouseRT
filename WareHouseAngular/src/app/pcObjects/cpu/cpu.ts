import { Component } from '../component/component';

export class Cpu extends Component {
    name: string;
    core: number;
    threads: number;
    baseClock: string;
    maxBoostClock: string;

}
