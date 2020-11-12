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

import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.beans.HistoricMovements;
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
	public void delete(@RequestBody DockingStation dockingStation, String string) {
		HistoricDelete recordDelete= new HistoricDelete();
		recordDelete.setProduct(dockingStation);
		//da settare in FrontEnd prima di conferma eliminazione
		recordDelete.setNote(string);
		recordDelete.setDate(new Date());
		deleteService.save(recordDelete);
		service.delete(dockingStation);
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
