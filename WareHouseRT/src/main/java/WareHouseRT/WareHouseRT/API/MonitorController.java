package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Monitor;
import WareHouseRT.WareHouseRT.service.MonitorService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MonitorController {

	private MonitorService service;

	@PostMapping("/saveMonitor")
	public void save(@RequestBody Monitor monitor) {
		service.save(monitor);
	}

	@GetMapping("/findAllMonitor")
	public List<Monitor> findAll() {
		return service.findAll();
	}
}
