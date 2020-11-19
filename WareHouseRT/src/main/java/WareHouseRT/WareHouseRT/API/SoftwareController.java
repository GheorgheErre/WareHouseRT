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

import WareHouseRT.WareHouseRT.beans.Software;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.SoftwareService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SoftwareController {
	@Autowired
	private SoftwareService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateSoftware")
	public Software saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		return service.saveOrUpdate((Software) historicRequest.getProduct(), historicRequest.getNote());
	}
	
	@PostMapping("/deleteSoftware")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((Software) historicRequest.getProduct());
	}
	
	@GetMapping("/findSoftware")
	public Optional<Software> findByID(@RequestBody Software software ) {
		return service.findByID(software.getId());
	}

	@GetMapping("/findAllSoftware")
	public List<Software> findAll() {
		return service.findAll();
	}

	@GetMapping("/countSoftware")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveSoftwareToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Software) historicRequest.getProduct());
	};
	
	@PostMapping("/moveSoftwareFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Software) historicRequest.getProduct());
	};

}
