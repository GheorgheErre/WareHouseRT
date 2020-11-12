package WareHouseRT.WareHouseRT.beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * 
 * Class that represents articles that can be added to a WorkStation type
 * Object.
 * 
 */

public abstract class Article extends Product {

}
