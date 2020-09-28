package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.rt.warehouse.beans.PowerSupplie;
import it.rt.warehouse.service.PowerSupplieService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class PowerSupplieController {
	
	@Autowired
	private PowerSupplieService service;
	
	@PostMapping("/savePowerSupplie")
	public void save(PowerSupplie powerSupplie) {
		service.save(powerSupplie);
	}
	
}
