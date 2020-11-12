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

import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.MouseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MouseController {
	
	@Autowired
	private MouseService service;
	@Autowired
	private HistoricDeleteService deleteService;
	
	@PostMapping("/saveOrUpdateMouse")
	public void saveOrUpdate(@RequestBody Mouse mouse) {
		service.saveOrUpdate(mouse);
	}
	
	@PostMapping("/deleteMouse")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Mouse) deleteRequest.getProduct());
	}
	
	@GetMapping("/findMouse")
	public Optional<Mouse> findByID(@RequestBody Mouse mouse ) {
		return service.findByID(mouse.getId());
	}
	
	@GetMapping("/findAllMouse")
	public List<Mouse> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countMouse")
	public long count() {
		return service.count();
	}


}
