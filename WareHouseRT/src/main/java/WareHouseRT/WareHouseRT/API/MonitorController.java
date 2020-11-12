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

import WareHouseRT.WareHouseRT.beans.Monitor;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.MonitorService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MonitorController {

	@Autowired
	private MonitorService service;

	@Autowired
	private HistoricDeleteService deleteService;
	
	@PostMapping("/saveOrUpdateMonitor")
	public void saveOrUpdate(@RequestBody Monitor monitor) {
		service.saveOrUpdate(monitor);
	}
	
	@PostMapping("/deleteMonitor")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Monitor) deleteRequest.getProduct());
	}
	
	@GetMapping("/findMonitor")
	public Optional<Monitor> findByID(@RequestBody Monitor monitor ) {
		return service.findByID(monitor.getId());
	}

	@GetMapping("/findAllMonitor")
	public List<Monitor> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countMonitor")
	public long count() {
		return service.count();
	}

}
