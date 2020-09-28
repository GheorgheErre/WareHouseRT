package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.rt.warehouse.beans.Laptop;
import it.rt.warehouse.service.LaptopService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LaptopController {
	
	@Autowired
	private LaptopService service;
	
	@PostMapping("/saveLaptop")
	public void save(Laptop  laptop) {
		service.save(laptop);
	}
}
