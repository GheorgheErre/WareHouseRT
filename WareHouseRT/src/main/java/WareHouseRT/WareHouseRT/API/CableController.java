package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.service.CableService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CableController {
	
	private CableService service;
	
	@PostMapping("/saveDesktop")
	public void save(@RequestBody Cable cable) {
		service.save(cable);
	}
	
	@GetMapping("/findAllDesktop")
	public List<Cable> findAll() {
		return service.findAll();
	}

}
