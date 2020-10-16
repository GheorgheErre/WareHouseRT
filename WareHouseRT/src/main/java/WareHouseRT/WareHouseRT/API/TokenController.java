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

import WareHouseRT.WareHouseRT.beans.Token;
import WareHouseRT.WareHouseRT.service.TokenService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class TokenController {
	@Autowired
	private TokenService service;

	@PostMapping("/saveToken")
	public void save(@RequestBody Token token) {
		service.save(token);
	}

	@PostMapping("/deleteToken")
	public void delete(@RequestBody Token token) {
		service.save(token);
	}

	@GetMapping("/findToken")
	public Optional<Token> findByID(@RequestBody Token token) {
		return service.findByID(token.getId());
	}

	@GetMapping("/findAllToken")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Token> findAll() {
		return service.findAll();
	}

	@GetMapping("/countToken")
	@PreAuthorize("hasRole('ADMIN')")
	public long count() {
		return service.count();
	}

}
