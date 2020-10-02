//package WareHouseRT.WareHouseRT.API;
//
//import java.security.Principal;
//import java.util.Base64;
//
//import javax.servlet.http.HttpServletRequest;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.security.SecurityProperties;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import WareHouseRT.WareHouseRT.beans.User;
//import WareHouseRT.WareHouseRT.service.UserService;
//
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api")
//public class LoginController {
//	
////	@Autowired
////	private UserService userService;
////	
////	@PostMapping("/login")
////    public boolean login(@RequestBody User user) {
////        return
////          user.getUsername().equals("user") && user.getPassword().equals("password");
////    }
////	
////    @RequestMapping("/user")
////    public Principal user(HttpServletRequest request) {
////        String authToken = request.getHeader("Authorization")
////          .substring("Basic".length()).trim();
////        return () ->  new String(Base64.getDecoder()
////          .decode(authToken)).split(":")[0];
////    }
//	
//
//}
