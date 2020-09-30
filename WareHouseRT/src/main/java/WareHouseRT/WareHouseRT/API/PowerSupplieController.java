package WareHouseRT.WareHouseRT.API;

import java.util.List;

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
	
	@PostMapping("/savePowerSupplie")
	public void save(@RequestBody PowerSupplie powerSupplie) {
		service.save(powerSupplie);
	}
	@GetMapping("/findAllPowerSupplie")
	public List<PowerSupplie> findAll() {
		return service.findAll();
	}

	
}
