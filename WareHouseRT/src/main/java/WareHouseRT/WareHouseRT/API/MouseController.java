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
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.MouseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MouseController {
	
	@Autowired
	private MouseService service;
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;

	
	@PostMapping("/saveOrUpdateMouse")
	public Mouse saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		return service.saveOrUpdate((Mouse) historicRequest.getProduct(), historicRequest.getNote());
	}
	
	@PostMapping("/deleteMouse")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((Mouse) historicRequest.getProduct());
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

	@PostMapping("/moveMouseToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Mouse) historicRequest.getProduct());
	};
	
	@PostMapping("/moveMouseFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Mouse) historicRequest.getProduct());
	};
	
}
