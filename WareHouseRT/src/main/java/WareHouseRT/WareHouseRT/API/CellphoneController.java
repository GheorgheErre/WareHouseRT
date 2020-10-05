package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Cellphone;
import WareHouseRT.WareHouseRT.service.CellphoneService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CellphoneController {

	private CellphoneService service;

	@PostMapping("/saveCellphone")
	public void save(@RequestBody Cellphone cellphone) {
		service.save(cellphone);
	}

	@GetMapping("/findAllCellphone")
	public List<Cellphone> findAll() {
		return service.findAll();
	}

}
