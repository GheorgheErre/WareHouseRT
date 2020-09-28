package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import it.rt.warehouse.beans.HDD;
import it.rt.warehouse.service.HDDService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class HddController {

	@Autowired
	private HDDService service;
	
	@PostMapping("/saveHdd")
	public void save(HDD hdd) {
		service.save(hdd);
	}
}
