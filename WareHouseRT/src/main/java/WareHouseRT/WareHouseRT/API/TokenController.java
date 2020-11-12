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
	private HistoricDeleteService deleteService;
	
	@PostMapping("/saveOrUpdateToken")
	public void saveOrUpdate(@RequestBody Token token) {
		service.saveOrUpdate(token);
	}

	@PostMapping("/deleteToken")
	public void delete(@RequestBody HistoricRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Token) deleteRequest.getProduct());
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

}
