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
import WareHouseRT.WareHouseRT.beans.Keyboard;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.KeyboardService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class KeyboardController {
	
	@Autowired
	private KeyboardService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	@Autowired
	private HistoricMovementsService movementsService;

	@PostMapping("/saveOrUpdateKeyboard")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
	
		String tipoAzione="Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Keyboard) historicRequest.getProduct());
	}
	
	@PostMapping("/deleteKeyboard")
	public void delete(@RequestBody HistoricRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Keyboard) deleteRequest.getProduct());
	}
	
	@GetMapping("/findKeyboard")
	public Optional<Keyboard> findByID(@RequestBody Keyboard keyboard ) {
		return service.findByID(keyboard.getId());
	}

	@GetMapping("/findAllKeyboard")
	public List<Keyboard> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countKeyboard")
	public long count() {
		return service.count();
	}

	@PostMapping("/moveKeyboard")
	public void move(@RequestBody  HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto";
		
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Keyboard) historicRequest.getProduct());
	};

}
