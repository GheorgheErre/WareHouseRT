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

import WareHouseRT.WareHouseRT.beans.PowerSupplie;
import WareHouseRT.WareHouseRT.service.PowerSupplieService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class PowerSupplieController {

	@Autowired
	private PowerSupplieService service;

	@PostMapping("/saveOrUpdatePowerSupplie")
	public void saveOrUpdate(@RequestBody PowerSupplie powerSupplie) {
		service.saveOrUpdate(powerSupplie);
	}
	
	@PostMapping("/deletePowerSupplie")
	public void delete(@RequestBody PowerSupplie powerSupplie) {
		service.delete(powerSupplie);
	}
	
	@GetMapping("/findPowerSupplie")
	public Optional<PowerSupplie> findByID(@RequestBody PowerSupplie powerSupplie ) {
		return service.findByID(powerSupplie.getId());
	}

	@GetMapping("/findAllPowerSupplie")
	public List<PowerSupplie> findAll() {
		return service.findAll();
	}

	@GetMapping("/countPowerSupplie")
	public long count() {
		return service.count();
	}

}
