package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.MotherBoard;
import WareHouseRT.WareHouseRT.service.MotherBoardService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MotherBoardController {
	
	@Autowired
	private MotherBoardService service;

	@PostMapping("/saveMotherBoard")
	public void save(@RequestBody MotherBoard motherBoard) {
		service.save(motherBoard);
	}
}
