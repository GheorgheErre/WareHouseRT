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

import WareHouseRT.WareHouseRT.beans.OperativeSystem;
import WareHouseRT.WareHouseRT.service.OperativeSystemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class OperativeSystemController {
	@Autowired
	private OperativeSystemService service;

	@PostMapping("/saveOrUpdateOperativeSystem")
	public void saveOrUpdate(@RequestBody OperativeSystem operativeSystem) {
		service.saveOrUpdate(operativeSystem);
	}
	
	@PostMapping("/deleteOperativeSystem")
	public void delete(@RequestBody OperativeSystem operativeSystem) {
		service.delete(operativeSystem);
	}
	
	@GetMapping("/findOperativeSystem")
	public Optional<OperativeSystem> findByID(@RequestBody OperativeSystem operativeSystem ) {
		return service.findByID(operativeSystem.getId());
	}

	@GetMapping("/findAllOperativeSystem")
	public List<OperativeSystem> findAll() {
		return service.findAll();
	}

	@GetMapping("/countOperativeSystem")
	public long count() {
		return service.count();
	}
}
