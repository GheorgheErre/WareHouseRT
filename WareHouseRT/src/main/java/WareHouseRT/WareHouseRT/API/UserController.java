package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import WareHouseRT.WareHouseRT.beans.AuthRequest;
import WareHouseRT.WareHouseRT.beans.User;
import WareHouseRT.WareHouseRT.service.UserService;
import WareHouseRT.WareHouseRT.util.JwtUtil;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService service;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception {
		String username = user.getUsername();
		if (username != null && !"".equals(username)) {
			if (service.getUserByUsername(username) != null) {
				throw new Exception("user with " + username + " is already exist");
			}
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setAccountNonExpired(true);
		user.setAccountNonLocked(true);
		user.setCredentialsNonExpired(true);
		user.setEnabled(true);
		return service.save(user);
	}
	

	@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			Authentication authentication = new UsernamePasswordAuthenticationToken(authRequest.getUsername(),
					authRequest.getPassword());
			
			authenticationManager.authenticate(authentication);
		} catch (Exception ex) {
			throw new Exception("inavalid username/password");
		}
		return jwtUtil.generateToken(authRequest.getUsername());
	}
	
	@GetMapping("/prova")
	public String provaAutenticazione() {
		return "Prova autenticazione con token";
	}

}
