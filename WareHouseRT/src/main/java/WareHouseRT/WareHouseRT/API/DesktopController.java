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
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.service.DesktopService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DesktopController {

	@Autowired
	private DesktopService service;
	@Autowired
	private HistoricDeleteService deleteService;
	
	@PostMapping("/saveOrUpdateDesktop")
	public void saveOrUpdate(@RequestBody Desktop desktop) {
		service.saveOrUpdate(desktop);
	}
	
	@PostMapping("/deleteDesktop")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Desktop) deleteRequest.getProduct());
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
