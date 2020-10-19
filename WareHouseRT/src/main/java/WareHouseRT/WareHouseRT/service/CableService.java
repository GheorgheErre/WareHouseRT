package WareHouseRT.WareHouseRT.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.repository.CableRepository;

@Service
public class CableService {
	
	@Autowired
	private CableRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(Cable cable) {
		cable.setId(sequenceService.getNextSequence(Cable.SEQUENCE_NAME));
		cable.setIdentifier(createIdentifier());
		repo.save(cable);
		
	}

	public void delete(Cable entity) {
		repo.delete(entity);
	}
	
	public void update(Cable newCable) {
//		Optional<Cable> oldCable = repo.findByIdentifier(identifier);
//		
//		if(oldCable.isPresent()) {
//			
//		}
		repo.save(newCable);
	}

	public Optional<Cable> findByID(long id) {
		return repo.findById(id);
	}

	public List<Cable> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}
	
	
	public String createIdentifier() {
		String idCable = "CBL";
		String pattern = "MM/dd/yyyy";
		DateFormat df = new SimpleDateFormat(pattern);
		
		Date today = Calendar.getInstance().getTime(); 
		String todayAsString = df.format(today);
		
		String identifier = idCable + todayAsString;
		return identifier;
		
	}


}
