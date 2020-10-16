package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.User;
import WareHouseRT.WareHouseRT.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	 @Autowired
	    private UserRepository repository;

	    @Override
	    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	        User user = repository.findByUsername(username);
	        List<GrantedAuthority> authorities = user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName().name()))
	        		.collect(Collectors.toList());
	        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
	        
	    }
	    
//	    @Override
//	    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//	       return repository.findByUsername(username)CustomUserDetailsService
//	    		   .orElseThrow(() -> new UsernameNotFountException(String.format("username :s not found", username)));
//	    }

}
