package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Desktop;
import WareHouseRT.WareHouseRT.service.DesktopService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DesktopController {

	@Autowired
	private DesktopService service;
	
	@PostMapping("/saveOrUpdateDesktop")
	public void saveOrUpdate(@RequestBody Desktop desktop) {
		service.saveOrUpdate(desktop);
	}
	
	@PostMapping("/deleteDesktop")
	public void delete(@RequestBody Desktop desktop) {
		service.delete(desktop);
	}
	
	@GetMapping("/findDesktop")
	public Optional<Desktop> findByID(@RequestBody Desktop desktop ) {
		return service.findByID(desktop.getId());
	}
	
	@GetMapping("/findAllDesktop")
	public List<Desktop> findAll() {
		return service.findAll();
	}
	@GetMapping("/countDesktop")
	public long count() {
		return service.count();
	}
}
