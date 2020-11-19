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
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.CableService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CableController {

	@Autowired
	private CableService service;
	@Autowired
	private HistoricDeleteService deleteService;

	@Autowired
	private HistoricMovementsService movementsService;

	@PostMapping("/saveOrUpdateCable")
	public Cable saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		
		return service.saveOrUpdate((Cable) historicRequest.getProduct(), historicRequest.getNote());
	
		
	}

	@PostMapping("/deleteCable")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((Cable) historicRequest.getProduct());
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

	@PostMapping("/moveCableToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Cable) historicRequest.getProduct());
	};
	
	@PostMapping("/moveCableFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Cable) historicRequest.getProduct());
	};
	
}
