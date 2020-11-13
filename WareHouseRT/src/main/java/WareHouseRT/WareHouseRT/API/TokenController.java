package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.beans.Token;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.TokenService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class TokenController {
	@Autowired
	private TokenService service;

	@Autowired
	private HistoricMovementsService movementsService;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@PostMapping("/saveOrUpdateToken")
	public void saveOrUpdate(@RequestBody Token token) {
		service.saveOrUpdate(token);
	}

	@PostMapping("/deleteToken")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((Token) historicRequest.getProduct());
	}

	@GetMapping("/findToken")
	public Optional<Token> findByID(@RequestBody Token token) {
		return service.findByID(token.getId());
	}

	@GetMapping("/findAllToken")
	public List<Token> findAll() {
		return service.findAll();
	}

	@GetMapping("/countToken")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveTokenToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Token) historicRequest.getProduct());
	};
	
	@PostMapping("/moveCableFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((Token) historicRequest.getProduct());
	};

}
