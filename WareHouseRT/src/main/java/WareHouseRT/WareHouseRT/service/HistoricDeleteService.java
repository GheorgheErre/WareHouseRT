package WareHouseRT.WareHouseRT.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.repository.HistoricDeleteRepository;

@Service
public class HistoricDeleteService {

	@Autowired
	private HistoricDeleteRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(HistoricRequest deleteRequest) {

		HistoricDelete recordDelete = new HistoricDelete();

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		DateTimeFormatter newFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

		LocalDate todayDate = LocalDate.now();

		String formattedDate = todayDate.format(formatter);
		
		LocalDate date = LocalDate.parse(formattedDate, formatter);
		String dateString = date.format(newFormatter);
		date = LocalDate.parse(dateString, newFormatter);


		recordDelete.setId(sequenceService.getNextSequence(HistoricDelete.SEQUENCE_NAME));
		recordDelete.setProduct(deleteRequest.getProduct());
		recordDelete.setNote(deleteRequest.getNote());
		recordDelete.setDate(date);

		repo.save(recordDelete);
	}

	public void delete(HistoricDelete entity) {

		repo.delete(entity);
	}

	public Optional<HistoricDelete> findByID(long id) {
		return repo.findById(id);
	}

	public List<HistoricDelete> findAll() {
		return repo.findAll();

	}

}
