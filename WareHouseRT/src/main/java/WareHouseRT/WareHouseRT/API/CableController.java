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

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.service.CableService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CableController {

	@Autowired
	private CableService service;
	@Autowired
	private HistoricDeleteService deleteService;

	@PostMapping("/saveOrUpdateCable")
	public void saveOrUpdate(@RequestBody Cable cable) {
		service.saveOrUpdate(cable);
	}

	@PostMapping("/deleteCable")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Cable) deleteRequest.getProduct());
	}
	

	@GetMapping("/findCable")
	public Optional<Cable> findByID(@RequestBody Cable cable) {
		return service.findByID(cable.getId());
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
