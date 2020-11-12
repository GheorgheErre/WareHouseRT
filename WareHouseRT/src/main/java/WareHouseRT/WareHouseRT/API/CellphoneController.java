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

import WareHouseRT.WareHouseRT.beans.Cellphone;
import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.CellphoneService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CellphoneController {
	@Autowired
	private CellphoneService service;
	
	@Autowired
	private HistoricDeleteService deleteService;

	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateCellphone")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Cellphone) historicRequest.getProduct());
	}
	
	@PostMapping("/deleteCellphone")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((Cellphone) historicRequest.getProduct());
	}
	
	
	@GetMapping("/findCellphone")
	public Optional<Cellphone> findByID(@RequestBody Cellphone cellphone ) {
		return service.findByID(cellphone.getId());
	}

	@GetMapping("/findAllCellphone")
	public List<Cellphone> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countCellphone")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveCellphone")
	public void move(@RequestBody  HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Cellphone) historicRequest.getProduct());
	};
}
