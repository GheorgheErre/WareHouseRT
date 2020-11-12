package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.GraphicTablet;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.service.GraphicTabletService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GraphicTabletController {

	@Autowired
	private GraphicTabletService service;

	@Autowired
	private HistoricDeleteService deleteService;
	
	@PostMapping("/saveOrUpdateGraphicTablet")
	public void saveOrUpdate(@RequestBody GraphicTablet graphicTablet) {
		service.saveOrUpdate(graphicTablet);
	}
	
	@PostMapping("/deleteGraphicTablet")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((GraphicTablet) deleteRequest.getProduct());
	}
	
	@GetMapping("/findGraphicTablet")
	public Optional<GraphicTablet> findByID(@RequestBody GraphicTablet graphicTablet ) {
		return service.findByID(graphicTablet.getId());
	}

	@GetMapping("/findAllGraphicTablet")
	public List<GraphicTablet> findAll() {
		return service.findAll();
	}

	@GetMapping("/countGraphicTablet")
	public long count() {
		return service.count();
	}
}
