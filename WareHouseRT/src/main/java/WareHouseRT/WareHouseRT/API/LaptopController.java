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

import WareHouseRT.WareHouseRT.beans.Laptop;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.LaptopService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LaptopController {
	
	@Autowired
	private LaptopService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateLaptop")
	public Laptop saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
		
		Laptop l = service.saveOrUpdate((Laptop) historicRequest.getProduct());
		historicRequest.setProduct(l);
		
		movementsService.save(historicRequest, tipoAzione);
		return l;
	}
	
	@PostMapping("/deleteLaptop")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((Laptop) historicRequest.getProduct());
	}
	
	@GetMapping("/findLaptop")
	public Optional<Laptop> findByID(@RequestBody Laptop laptop ) {
		return service.findByID(laptop.getId());
	}
	
	@GetMapping("/findAllLaptop")
	public List<Laptop> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countLaptop")
	public long count() {
		return service.count();
	}


	@PostMapping("/moveLaptopToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Laptop) historicRequest.getProduct());
	};
	
	@PostMapping("/moveLaptopFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Laptop) historicRequest.getProduct());
	};
		
}
