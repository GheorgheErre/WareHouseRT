package WareHouseRT.WareHouseRT.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class CreateIdentifierService {
	
	//create identifier for article
	public String createIdentifier(String initial) {
		String pattern = "MM/dd/yyyy";
		DateFormat df = new SimpleDateFormat(pattern);
		
		Date today = Calendar.getInstance().getTime(); 
		String todayAsString = df.format(today);
		
		String identifier = initial + todayAsString;
		return identifier;
	}

}
