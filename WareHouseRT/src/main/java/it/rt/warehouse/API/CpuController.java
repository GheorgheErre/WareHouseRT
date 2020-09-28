package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.rt.warehouse.beans.CPU;
import it.rt.warehouse.service.CpuService;

@RestController
public class CpuController {

	@Autowired
	private CpuService service;
	
	@PostMapping("/saveCpu")
	public void save(CPU cpu) {
		service.save(cpu);
	}
	
	@RequestMapping("/prova")
	public void prova() {
		System.out.println("ciao");
	}
	
}
