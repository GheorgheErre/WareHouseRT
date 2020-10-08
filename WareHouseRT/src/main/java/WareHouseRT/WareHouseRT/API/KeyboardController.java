package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Keyboard;
import WareHouseRT.WareHouseRT.service.KeyboardService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class KeyboardController {
	@Autowired
	private KeyboardService service;

	@PostMapping("/saveKeyboard")
	public void save(@RequestBody Keyboard keyboard) {
		service.save(keyboard);
	}

	@GetMapping("/findAllKeyboard")
	public List<Keyboard> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countKeyboard")
	public long count() {
		return service.count();
	}


}
