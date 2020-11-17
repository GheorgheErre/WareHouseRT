package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class HistoricMovementsController {
	
	@Autowired
	private HistoricMovementsService service;
	
	@GetMapping("/findAllHistoryMovements")
	public List<HistoricMovements> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/findHistoryMovements")
	public Optional<HistoricMovements> findByID(@RequestBody HistoricMovements historicMovements ) {
		return service.findByID(historicMovements.getId());
	}

}
