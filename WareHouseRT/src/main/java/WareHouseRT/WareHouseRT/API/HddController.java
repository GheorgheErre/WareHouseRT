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

import WareHouseRT.WareHouseRT.beans.HDD;
import WareHouseRT.WareHouseRT.service.HDDService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class HddController {

	@Autowired
	private HDDService service;
	
	@PostMapping("/saveOrUpdateHdd")
	public void saveOrUpdate(@RequestBody HDD hdd) {
		service.saveOrUpdate(hdd);
	}
	
	@PostMapping("/deleteHdd")
	public void delete(@RequestBody HDD hdd) {
		service.delete(hdd);
	}
	
	@GetMapping("/findHdd")
	public Optional<HDD> findByID(@RequestBody HDD hdd ) {
		return service.findByID(hdd.getId());
	}
	
	@GetMapping("/findAllHdd")
	public List<HDD> findAll() {
		return service.findAll();
	}
	
	
	@GetMapping("/countHdd")
	public long count() {
		return service.count();
	}

}
