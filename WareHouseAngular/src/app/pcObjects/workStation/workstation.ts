import { Cpu } from "../cpu/cpu";
import { Gpu } from "../gpu/gpu";
import { Hdd } from "../hdd/hdd";
import { Motherboard } from "../motherBoard/motherboard";
import { Powersupplie } from "../powerSupplie/powersupplie";
import { Ram } from "../ram/ram";
import { Ssd } from "../ssd/ssd";

export class Workstation {
    CPU: Cpu;
    GPU: Gpu;
    HDD: Hdd;
    Motherboard: Motherboard;
    Powersupplie: Powersupplie;
    RAM: Ram;
    SSD: Ssd;
}
