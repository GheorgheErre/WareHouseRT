package WareHouseRT.WareHouseRT;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class WareHouseRtApplication {

	public static void main(String[] args) {
		SpringApplication.run(WareHouseRtApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsCofigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedHeaders("*").allowedMethods("*").allowCredentials(true);
			}
		};
	}

}
