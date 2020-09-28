package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.rt.warehouse.beans.CPU;
import it.rt.warehouse.service.CpuService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CpuController {

	@Autowired
	private CpuService service;
	
	@PostMapping("/save")
	public void save(CPU cpu) {
		service.save(cpu);
	}
	
}
