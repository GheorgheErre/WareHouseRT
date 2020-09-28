package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import it.rt.warehouse.beans.Desktop;
import it.rt.warehouse.service.DesktopService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DesktopController {

	@Autowired
	private DesktopService service;
	
	@PostMapping("/saveDesktop")
	public void save(Desktop desktop) {
		service.save(desktop);
	}
}
