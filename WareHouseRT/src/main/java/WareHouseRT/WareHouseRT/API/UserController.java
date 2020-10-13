package WareHouseRT.WareHouseRT.API;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import WareHouseRT.WareHouseRT.beans.Role;
import WareHouseRT.WareHouseRT.beans.User;
import WareHouseRT.WareHouseRT.enums.ERole;
import WareHouseRT.WareHouseRT.payload.request.LoginRequest;
import WareHouseRT.WareHouseRT.payload.request.SignupRequest;
import WareHouseRT.WareHouseRT.payload.response.JwtResponse;
import WareHouseRT.WareHouseRT.payload.response.MessageResponse;
import WareHouseRT.WareHouseRT.repository.RoleRepository;
import WareHouseRT.WareHouseRT.service.CustomUserDetailsService;
import WareHouseRT.WareHouseRT.service.UserService;
import WareHouseRT.WareHouseRT.util.JwtUtil;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService service;
	@Autowired
	private CustomUserDetailsService userDetailsService;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/registerUser")
	public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {

		String username = signUpRequest.getUsername();

		if (username != null && !"".equals(username)) {
			if (service.getUserByUsername(username) != null) {
				return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
			}

			// se volessimo inserire anche la mail
			/*
			 * if (userRepository.existsByEmail(signUpRequest.getEmail())) { return
			 * ResponseEntity.badRequest().body(new
			 * MessageResponse("Error: Email is already in use!")); }
			 */

			User user = new User(signUpRequest.getUsername(), passwordEncoder.encode(signUpRequest.getPassword()));
//			user.setAccountNonExpired(true);
//			user.setAccountNonLocked(true);
//			user.setCredentialsNonExpired(true);
//			user.setEnabled(true);

			Set<String> strRoles = signUpRequest.getRoles();
			Set<Role> roles = new HashSet<>();

			if (strRoles == null) {
				Role userRole = roleRepository.findByName(ERole.ROLE_USER)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
				roles.add(userRole);
			} else {
				strRoles.forEach(role -> {
					switch (role) {
					case "admin":
						Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(adminRole);

						break;
					default:
						Role userRole = roleRepository.findByName(ERole.ROLE_USER)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(userRole);
					}
				});
			}

			user.setRoles(roles);
			service.save(user);

			return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
		}

		return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is empty"));

	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> generateToken(@RequestBody LoginRequest loginRequest) throws Exception {
		try {
			Authentication authentication = new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
					loginRequest.getPassword());

			authenticationManager.authenticate(authentication);
			SecurityContextHolder.getContext().setAuthentication(authentication);
		} catch (Exception ex) {
			throw new Exception("inavalid username/password");
		}
		String token = jwtUtil.generateToken(loginRequest.getUsername());

		UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(token, userDetails.getUsername(), roles));
	}

	@GetMapping("/prova")
	public String provaAutenticazione() {
		return "ci sei riuscito";
	}

}
