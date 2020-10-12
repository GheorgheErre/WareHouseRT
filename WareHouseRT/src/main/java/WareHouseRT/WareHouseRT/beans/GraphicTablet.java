package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class GraphicTablet extends Article {
	
	@Transient
	public static final String SEQUENCE_NAME = "graphic_tablet_sequence";

	@Id
	private long id;

	private int height;
	private int width;
	private int length;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}
}
