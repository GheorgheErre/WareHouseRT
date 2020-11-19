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

import WareHouseRT.WareHouseRT.beans.DockingStation;

import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.DockingStationService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DockingStationController {
	@Autowired
	private DockingStationService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;

	@PostMapping("/saveOrUpdateDockingStation")
	public DockingStation saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		return service.saveOrUpdate((DockingStation) historicRequest.getProduct(), historicRequest.getNote());
	}
	
	@PostMapping("/deleteDockingStation")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((DockingStation) historicRequest.getProduct());
	}
	
	@GetMapping("/findDockingStation")
	public Optional<DockingStation> findByID(@RequestBody DockingStation dockingStation ) {
		return service.findByID(dockingStation.getId());
	}

	@GetMapping("/findAllDockingStation")
	public List<DockingStation> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countDockingStation")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveDockingStationToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((DockingStation) historicRequest.getProduct());
	};
	
	@PostMapping("/moveDockingStationFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((DockingStation) historicRequest.getProduct());
	};

}
