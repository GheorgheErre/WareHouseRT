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
	public Keyboard saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
		
		Keyboard k = service.saveOrUpdate((Keyboard) historicRequest.getProduct());
		historicRequest.setProduct(k);
		
		movementsService.save(historicRequest, tipoAzione);
		return k;
	}
	
	@PostMapping("/deleteKeyboard")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((Keyboard) historicRequest.getProduct());
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

	@PostMapping("/moveKeyboardToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Keyboard) historicRequest.getProduct());
	};
	
	@PostMapping("/moveKeyboardFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Keyboard) historicRequest.getProduct());
	};

}
