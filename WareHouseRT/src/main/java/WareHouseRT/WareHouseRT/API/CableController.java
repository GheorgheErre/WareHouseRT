package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@Autowired
	private CableService service;
	
	@PostMapping("/saveCable")
	public void save(@RequestBody Cable cable) {
		service.save(cable);
	}
	
	@GetMapping("/findAllCable")
	public List<Cable> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countCable")
	public long count() {
		return service.count();
	}


}
