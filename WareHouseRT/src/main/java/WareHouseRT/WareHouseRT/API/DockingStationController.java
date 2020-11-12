package WareHouseRT.WareHouseRT.API;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonValue;

import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
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
	public void save(@RequestBody DockingStation dockingStation) {
		service.saveOrUpdate(dockingStation);
		HistoricMovements recordMove= new HistoricMovements();
		recordMove.setDate(new Date());
		recordMove.setProduct(dockingStation);
		recordMove.setAction("tipoAzione");
		movementsService.save(recordMove);
	}
	
	@PostMapping("/deleteDockingStation")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((DockingStation) deleteRequest.getProduct());
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
	
	@PostMapping("/moveDockingStation")
	public void move(@RequestBody DockingStation dockingStation){
		
		service.saveOrUpdate(dockingStation);
		
		HistoricMovements recordMove= new HistoricMovements();
		recordMove.setDate(new Date());
		recordMove.setProduct(dockingStation);
		recordMove.setAction("tipoAzione");
		movementsService.save(recordMove);
	};

}
