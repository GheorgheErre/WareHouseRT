package WareHouseRT.WareHouseRT.API;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import WareHouseRT.WareHouseRT.beans.WorkStation;
import WareHouseRT.WareHouseRT.service.WorkStationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class WorkStationController {

	@Autowired
	private WorkStationService service;
	
	@PostMapping("/saveOrUpdateWorkStation")
	public void saveOrUpdate(@RequestBody WorkStation workstation) {
		service.saveOrUpdate(workstation);
	}
	
	
	@GetMapping("/findWorkStation/{id}")
	public WorkStation findWorkstation (@PathVariable("id") int id) {
		return service.findWorkstation(id);
		
	}
	
	@PostMapping("/deleteWorkStation")
	public void delete(@RequestBody WorkStation workStation) {
		service.delete(workStation);
	}

	@GetMapping("/findAllWorkStation")
	public List<WorkStation> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countWorkStation")
	public long count() {
		return service.count();
	}
}
